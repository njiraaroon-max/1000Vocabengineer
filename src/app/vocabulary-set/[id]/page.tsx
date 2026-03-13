'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, Heart, Share2, BookOpen,
  ChevronLeft, ChevronRight, Volume2, Shuffle, HelpCircle
} from 'lucide-react'
import { getVocabularySet, getVocabulariesBySetId } from '@/data/vocabularySets'
import type { Vocabulary, VocabularySet, SetStats } from '@/types/database'

const difficultyConfig = {
  easy: { label: 'Easy', color: 'bg-green-500/20 text-green-400' },
  medium: { label: 'Medium', color: 'bg-yellow-500/20 text-yellow-400' },
  hard: { label: 'Hard', color: 'bg-red-500/20 text-red-400' },
}

export default function FlashcardPage() {
  const params = useParams()
  const setId = params.id as string

  const [vocabSet, setVocabSet] = useState<(VocabularySet & { stats: SetStats }) | null>(null)
  const [vocabs, setVocabs] = useState<Vocabulary[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardPage, setCardPage] = useState(0) // 0=word, 1=meaning, 2=example
  const [isShuffled, setIsShuffled] = useState(false)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  useEffect(() => {
    const set = getVocabularySet(setId)
    if (set) setVocabSet(set)

    const words = getVocabulariesBySetId(setId)
    setVocabs(words)
  }, [setId])

  const currentVocab = vocabs[currentIndex]
  const diff = vocabSet ? difficultyConfig[vocabSet.difficulty] : null

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.85
    speechSynthesis.speak(utterance)
  }

  const goNext = () => {
    if (currentIndex < vocabs.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setCardPage(0)
    }
  }

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
      setCardPage(0)
    }
  }

  const goCardPage = (dir: 'left' | 'right') => {
    if (dir === 'right' && cardPage < 2) setCardPage(prev => prev + 1)
    if (dir === 'left' && cardPage > 0) setCardPage(prev => prev - 1)
  }

  const toggleFavorite = () => {
    if (!currentVocab) return
    const newFavs = new Set(favorites)
    if (newFavs.has(currentVocab.id)) {
      newFavs.delete(currentVocab.id)
    } else {
      newFavs.add(currentVocab.id)
    }
    setFavorites(newFavs)
  }

  const resetProgress = () => {
    setCurrentIndex(0)
    setCardPage(0)
  }

  const toggleShuffle = () => {
    if (!isShuffled) {
      const shuffled = [...vocabs].sort(() => Math.random() - 0.5)
      setVocabs(shuffled)
      setCurrentIndex(0)
    } else {
      const words = getVocabulariesBySetId(setId)
      setVocabs(words)
      setCurrentIndex(0)
    }
    setIsShuffled(!isShuffled)
    setCardPage(0)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goCardPage('right')
      if (e.key === 'ArrowLeft') goCardPage('left')
      if (e.key === 'ArrowUp') goPrev()
      if (e.key === 'ArrowDown') goNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  })

  if (!vocabSet || !currentVocab) {
    return (
      <div className="min-h-screen bg-main-gradient flex items-center justify-center">
        <div className="text-white text-xl">กำลังโหลด...</div>
      </div>
    )
  }

  const partOfSpeechTh: Record<string, string> = {
    noun: 'คำนาม',
    verb: 'คำกริยา',
    adjective: 'คำคุณศัพท์',
    adverb: 'คำกริยาวิเศษณ์',
  }

  return (
    <div className="min-h-screen bg-main-gradient">
      {/* Header */}
      <header className="bg-[#0F0F23]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Home size={18} />
              <span className="text-sm hidden sm:inline">หน้าแรก</span>
            </Link>

            <div className="text-center flex-1 mx-4">
              <h1 className="font-heading text-white text-sm sm:text-base truncate">
                {vocabSet.title}
              </h1>
              {diff && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${diff.color}`}>
                  {diff.label}
                </span>
              )}
            </div>

            <Link
              href={`/vocabulary-set/${setId}/quiz`}
              className="flex items-center gap-1.5 btn-pink text-white px-3 py-1.5 rounded-lg text-xs font-semibold"
            >
              <HelpCircle size={14} />
              <span className="hidden sm:inline">Quiz</span>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-4 mt-2 text-xs text-[#9CA3AF]">
            <span className="flex items-center gap-1">
              <Heart size={12} className="text-[#EC4899]" /> {vocabSet.stats.likes}
            </span>
            <span className="flex items-center gap-1">
              <Share2 size={12} className="text-blue-400" /> {currentIndex + 1}/{vocabs.length}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={12} className="text-green-400" /> {vocabSet.word_count} คำ
            </span>
          </div>
        </div>
      </header>

      {/* Flashcard */}
      <main className="max-w-lg mx-auto px-4 py-6">
        <div className="bg-[#1A1A2E] rounded-2xl p-6 min-h-[320px] flex flex-col items-center justify-center relative border border-white/5">
          {/* Card Page Navigation Arrows */}
          <button
            onClick={() => goCardPage('left')}
            disabled={cardPage === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors
              ${cardPage === 0 ? 'text-white/10' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => goCardPage('right')}
            disabled={cardPage === 2}
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors
              ${cardPage === 2 ? 'text-white/10' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
          >
            <ChevronRight size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentIndex}-${cardPage}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="text-center w-full px-8"
            >
              {/* Page 0: Word */}
              {cardPage === 0 && (
                <div>
                  <h2 className="font-heading text-white text-3xl sm:text-4xl mb-4">
                    {currentVocab.word}
                  </h2>
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#EC4899]/20 text-[#F9A8D4] border border-[#EC4899]/30 mb-4">
                    {partOfSpeechTh[currentVocab.part_of_speech] || currentVocab.part_of_speech}
                  </span>
                  <div>
                    <button
                      onClick={() => speak(currentVocab.word)}
                      className="p-3 rounded-full bg-[#EC4899]/10 hover:bg-[#EC4899]/20 transition-colors"
                    >
                      <Volume2 size={24} className="text-[#EC4899]" />
                    </button>
                  </div>
                </div>
              )}

              {/* Page 1: Meaning */}
              {cardPage === 1 && (
                <div>
                  <p className="text-[#9CA3AF] text-sm mb-2">ความหมาย:</p>
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#EC4899]/20 text-[#F9A8D4] border border-[#EC4899]/30 mb-4">
                    {partOfSpeechTh[currentVocab.part_of_speech] || currentVocab.part_of_speech}
                  </span>
                  <p className="text-white text-xl font-medium mb-2">
                    {currentVocab.meaning_th}
                  </p>
                  <p className="text-[#9CA3AF] text-sm italic">
                    {currentVocab.meaning_en}
                  </p>
                </div>
              )}

              {/* Page 2: Example */}
              {cardPage === 2 && (
                <div>
                  <p className="text-[#9CA3AF] text-sm mb-3">ตัวอย่างประโยค:</p>
                  <button
                    onClick={() => speak(currentVocab.example_en)}
                    className="p-2 rounded-full bg-[#EC4899]/10 hover:bg-[#EC4899]/20 transition-colors mb-3"
                  >
                    <Volume2 size={20} className="text-[#EC4899]" />
                  </button>
                  <p className="text-white text-base mb-2">
                    {currentVocab.example_en.split(new RegExp(`(${currentVocab.word})`, 'gi')).map((part, i) =>
                      part.toLowerCase() === currentVocab.word.toLowerCase() ? (
                        <span key={i} className="text-[#EC4899] font-bold">{part}</span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </p>
                  <p className="text-[#9CA3AF] text-sm mt-2">
                    {currentVocab.example_th}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-6">
            {[0, 1, 2].map((page) => (
              <button
                key={page}
                onClick={() => setCardPage(page)}
                className={`w-2.5 h-2.5 rounded-full dot transition-all ${
                  cardPage === page ? 'bg-[#EC4899] dot-active' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between mt-4 gap-3">
          <button
            onClick={toggleShuffle}
            className={`p-3 rounded-xl transition-colors ${
              isShuffled
                ? 'bg-[#60A5FA]/20 text-[#60A5FA]'
                : 'bg-[#1A1A2E] text-[#9CA3AF] hover:text-[#60A5FA]'
            }`}
            title={isShuffled ? 'กลับโหมดปกติ' : 'สุ่มคำศัพท์'}
          >
            <Shuffle size={20} />
          </button>

          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className={`px-4 py-3 rounded-xl transition-colors text-sm ${
              currentIndex === 0
                ? 'bg-white/5 text-white/20'
                : 'bg-[#1A1A2E] text-white hover:bg-white/10'
            }`}
          >
            ← คำก่อนหน้า
          </button>

          <button
            onClick={goNext}
            disabled={currentIndex === vocabs.length - 1}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-colors ${
              currentIndex === vocabs.length - 1
                ? 'bg-white/5 text-white/20'
                : 'btn-pink text-white'
            }`}
          >
            คำต่อไป →
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 bg-[#1A1A2E] rounded-full h-2 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / vocabs.length) * 100}%`,
              background: 'linear-gradient(90deg, #7C3AED, #EC4899)'
            }}
          />
        </div>
        <p className="text-center text-xs text-[#9CA3AF] mt-1">
          {currentIndex + 1} / {vocabs.length}
        </p>
      </main>
    </div>
  )
}
