'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Volume2, Check, X } from 'lucide-react'
import { getVocabularySet, getVocabulariesBySetId } from '@/data/vocabularySets'
import type { Vocabulary, VocabularySet, SetStats } from '@/types/database'

interface QuizQuestion {
  vocab: Vocabulary
  choices: string[]
  correctIndex: number
}

function generateQuestions(vocabs: Vocabulary[]): QuizQuestion[] {
  const shuffled = [...vocabs].sort(() => Math.random() - 0.5)

  return shuffled.map((vocab) => {
    // Get 3 wrong answers from other words
    const otherMeanings = vocabs
      .filter(v => v.id !== vocab.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(v => v.meaning_th)

    const choices = [...otherMeanings, vocab.meaning_th].sort(() => Math.random() - 0.5)
    const correctIndex = choices.indexOf(vocab.meaning_th)

    return { vocab, choices, correctIndex }
  })
}

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const setId = params.id as string

  const [vocabSet, setVocabSet] = useState<(VocabularySet & { stats: SetStats }) | null>(null)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    const set = getVocabularySet(setId)
    if (set) setVocabSet(set)

    const words = getVocabulariesBySetId(setId)
    if (words.length > 0) {
      setQuestions(generateQuestions(words))
    }
  }, [setId])

  const currentQ = questions[currentIndex]

  const handleAnswer = (choiceIndex: number) => {
    if (answered) return
    setSelectedAnswer(choiceIndex)
    setAnswered(true)

    if (choiceIndex === currentQ.correctIndex) {
      setScore(prev => prev + 1)
    }
  }

  const goNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
      setSelectedAnswer(null)
      setAnswered(false)
    }
  }

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.85
    speechSynthesis.speak(utterance)
  }

  const restartQuiz = () => {
    const words = getVocabulariesBySetId(setId)
    setQuestions(generateQuestions(words))
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setAnswered(false)
    setScore(0)
    setShowResult(false)
  }

  const partOfSpeechTh: Record<string, string> = {
    noun: 'คำนาม',
    verb: 'คำกริยา',
    adjective: 'คำคุณศัพท์',
    adverb: 'คำกริยาวิเศษณ์',
  }

  if (!vocabSet || questions.length === 0) {
    return (
      <div className="min-h-screen bg-main-gradient flex items-center justify-center">
        <div className="text-white text-xl">กำลังโหลด...</div>
      </div>
    )
  }

  // Result Screen
  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="min-h-screen bg-main-gradient flex items-center justify-center px-4">
        <div className="bg-[#1A1A2E] rounded-2xl p-8 max-w-md w-full text-center border border-white/5">
          <div className="text-6xl mb-4">
            {percentage >= 80 ? '🏆' : percentage >= 50 ? '👍' : '📚'}
          </div>
          <h2 className="font-heading text-white text-2xl mb-2">ผลคะแนน Quiz</h2>
          <p className="text-white/80 text-lg mb-1">{vocabSet.title}</p>
          <div className="my-6">
            <span className="text-5xl font-heading text-[#EC4899]">{score}</span>
            <span className="text-2xl text-[#9CA3AF]"> / {questions.length}</span>
          </div>
          <p className="text-[#9CA3AF] mb-6">
            ได้ {percentage}%
            {percentage >= 80 ? ' ยอดเยี่ยม! 🎉' : percentage >= 50 ? ' ดีมาก! 💪' : ' ลองอีกครั้งนะ! 📖'}
          </p>
          <div className="flex gap-3">
            <button
              onClick={restartQuiz}
              className="flex-1 btn-pink text-white font-semibold py-3 rounded-xl"
            >
              ทำใหม่อีกครั้ง
            </button>
            <Link
              href="/"
              className="flex-1 bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition-colors text-center"
            >
              🏠 หน้าแรก
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-main-gradient">
      {/* Header */}
      <header className="bg-[#0F0F23]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <Home size={18} />
            <span className="text-sm hidden sm:inline">หน้าแรก</span>
          </Link>

          <span className="font-heading text-white text-sm">🧠 Quiz — {vocabSet.title}</span>

          <div className="flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1 text-[#4ADE80]">
              <Check size={16} /> {score}
            </span>
            <span className="text-[#9CA3AF]">
              {currentIndex + 1}/{questions.length}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        {/* Progress Bar */}
        <div className="bg-[#1A1A2E] rounded-full h-2 overflow-hidden mb-6">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
              background: 'linear-gradient(90deg, #7C3AED, #EC4899)'
            }}
          />
        </div>

        {/* Question Card */}
        <div className="bg-[#1A1A2E] rounded-2xl p-6 border border-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Word */}
              <div className="text-center mb-6">
                <h2 className="font-heading text-white text-3xl mb-3">
                  {currentQ.vocab.word}
                </h2>
                <div className="flex items-center justify-center gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-[#EC4899]/20 text-[#F9A8D4] border border-[#EC4899]/30">
                    {partOfSpeechTh[currentQ.vocab.part_of_speech] || currentQ.vocab.part_of_speech}
                  </span>
                  <button
                    onClick={() => speak(currentQ.vocab.word)}
                    className="p-2 rounded-full bg-[#EC4899]/10 hover:bg-[#EC4899]/20 transition-colors"
                  >
                    <Volume2 size={16} className="text-[#EC4899]" />
                  </button>
                </div>
              </div>

              {/* Choices */}
              <div className="space-y-3">
                {currentQ.choices.map((choice, i) => {
                  let bgClass = 'bg-white/5 hover:bg-white/10 border-white/10'

                  if (answered) {
                    if (i === currentQ.correctIndex) {
                      bgClass = 'bg-[#4ADE80]/20 border-[#4ADE80]/50 text-[#4ADE80]'
                    } else if (i === selectedAnswer && i !== currentQ.correctIndex) {
                      bgClass = 'bg-[#F87171]/20 border-[#F87171]/50 text-[#F87171]'
                    } else {
                      bgClass = 'bg-white/5 border-white/5 text-white/30'
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={answered}
                      className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-center gap-3 ${bgClass}`}
                    >
                      <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs flex-shrink-0">
                        {answered && i === currentQ.correctIndex ? (
                          <Check size={14} className="text-[#4ADE80]" />
                        ) : answered && i === selectedAnswer && i !== currentQ.correctIndex ? (
                          <X size={14} className="text-[#F87171]" />
                        ) : (
                          String.fromCharCode(65 + i)
                        )}
                      </span>
                      {choice}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between mt-4 gap-3">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className={`px-4 py-3 rounded-xl transition-colors text-sm ${
              currentIndex === 0
                ? 'bg-white/5 text-white/20'
                : 'bg-[#1A1A2E] text-white hover:bg-white/10'
            }`}
          >
            ← ข้อก่อนหน้า
          </button>

          <button
            onClick={goNext}
            disabled={!answered}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-colors ${
              !answered
                ? 'bg-white/5 text-white/20'
                : 'btn-pink text-white'
            }`}
          >
            {currentIndex === questions.length - 1 ? 'ดูผลคะแนน →' : 'คำต่อไป →'}
          </button>
        </div>
      </main>
    </div>
  )
}
