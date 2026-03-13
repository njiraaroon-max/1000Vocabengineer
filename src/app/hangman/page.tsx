'use client'

import { useState, useEffect, useCallback, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, SkipForward, RotateCcw, Shuffle } from 'lucide-react'
import HangmanDrawing from '@/components/HangmanDrawing'
import confetti from 'canvas-confetti'
import { vocabularySets, getVocabulariesBySetId, getAllVocabularies } from '@/data/vocabularySets'
import type { Vocabulary } from '@/types/database'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const MAX_WRONG = 6
const WORDS_PER_ROUND = 20

export default function HangmanPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-main-gradient" />}>
      <HangmanContent />
    </Suspense>
  )
}

function HangmanContent() {
  const searchParams = useSearchParams()
  const autoStarted = useRef(false)
  const [selectedSetId, setSelectedSetId] = useState<string | null>(null)
  const [gameWords, setGameWords] = useState<Vocabulary[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState<Vocabulary | null>(null)
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set())
  const [wrongCount, setWrongCount] = useState(0)
  const [gameStatus, setGameStatus] = useState<'selecting' | 'playing' | 'won' | 'lost' | 'finished'>('selecting')
  const [score, setScore] = useState(0)
  const [played, setPlayed] = useState(0)

  const shuffleAndPick = (words: Vocabulary[]) => {
    const shuffled = [...words].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, WORDS_PER_ROUND)
  }

  const startGame = (setId: string | 'all') => {
    let words: Vocabulary[]
    if (setId === 'all') {
      words = getAllVocabularies()
      setSelectedSetId('all')
    } else {
      words = getVocabulariesBySetId(setId)
      setSelectedSetId(setId)
    }
    const picked = shuffleAndPick(words)
    setGameWords(picked)
    setCurrentIndex(0)
    setCurrentWord(picked[0])
    setGuessedLetters(new Set())
    setWrongCount(0)
    setScore(0)
    setPlayed(0)
    setGameStatus('playing')
  }

  // Auto-start from query param (?set=xxx or ?set=all)
  useEffect(() => {
    if (autoStarted.current) return
    const setParam = searchParams.get('set')
    if (setParam) {
      autoStarted.current = true
      startGame(setParam)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const nextWord = () => {
    const nextIdx = currentIndex + 1
    if (nextIdx >= gameWords.length) {
      setGameStatus('finished')
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 }, colors: ['#EC4899', '#F472B6', '#A78BFA', '#FFFFFF'] })
      return
    }
    setCurrentIndex(nextIdx)
    setCurrentWord(gameWords[nextIdx])
    setGuessedLetters(new Set())
    setWrongCount(0)
    setGameStatus('playing')
  }

  const handleGuess = useCallback((letter: string) => {
    if (gameStatus !== 'playing' || !currentWord) return
    if (guessedLetters.has(letter)) return

    const newGuessed = new Set(guessedLetters)
    newGuessed.add(letter)
    setGuessedLetters(newGuessed)

    const wordUpper = currentWord.word.toUpperCase().replace(/[^A-Z]/g, '')

    if (!wordUpper.includes(letter)) {
      const newWrong = wrongCount + 1
      setWrongCount(newWrong)
      if (newWrong >= MAX_WRONG) {
        setGameStatus('lost')
        setPlayed(p => p + 1)
      }
    } else {
      const allRevealed = wordUpper.split('').every(l => newGuessed.has(l))
      if (allRevealed) {
        setGameStatus('won')
        setScore(s => s + 1)
        setPlayed(p => p + 1)
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 }, colors: ['#EC4899', '#F472B6', '#A78BFA', '#FFFFFF'] })
      }
    }
  }, [gameStatus, currentWord, guessedLetters, wrongCount])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase()
      if (ALPHABET.includes(key)) handleGuess(key)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleGuess])

  const renderWord = () => {
    if (!currentWord) return null
    const word = currentWord.word.toUpperCase()
    return (
      <div className="flex flex-wrap justify-center gap-2 my-6">
        {word.split('').map((char, i) => {
          if (char === ' ' || char === '-') return <span key={i} className="w-4" />
          const isRevealed = guessedLetters.has(char) || gameStatus === 'lost' || gameStatus === 'won'
          return (
            <span key={i} className={`w-10 h-12 flex items-center justify-center border-b-3 text-2xl font-heading ${isRevealed ? 'text-white border-[#EC4899]' : 'border-white/30'} ${gameStatus === 'lost' && !guessedLetters.has(char) ? 'text-[#F87171]' : ''}`}>
              {isRevealed ? char : ''}
            </span>
          )
        })}
      </div>
    )
  }

  // ============ SUBJECT SELECTION SCREEN ============
  if (gameStatus === 'selecting') {
    return (
      <div className="min-h-screen bg-main-gradient">
        <header className="bg-[#0F0F23]/90 backdrop-blur-md border-b border-white/10">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-[#EC4899] transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm">กลับหน้าหลัก</span>
            </Link>
            <span className="font-heading text-white text-lg">🎮 Hangman</span>
            <div className="w-20" />
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="font-heading text-white text-2xl mb-2">เลือกวิชาที่ต้องการเล่น</h1>
            <p className="text-white/60 text-sm">สุ่ม {WORDS_PER_ROUND} คำจากวิชาที่เลือก</p>
          </div>

          {/* Random All */}
          <button
            onClick={() => startGame('all')}
            className="w-full mb-4 bg-gradient-to-r from-[#EC4899] to-[#A78BFA] text-white font-heading text-lg py-4 rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
          >
            <Shuffle size={24} />
            🎲 สุ่มจากทุกวิชา (1,200 คำ)
          </button>

          {/* Subject Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {vocabularySets.map((set) => (
              <button
                key={set.id}
                onClick={() => startGame(set.id)}
                className="bg-[#1A1A2E] rounded-xl p-4 border border-white/5 hover:border-[#EC4899]/40 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{set.icon_url}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm truncate group-hover:text-[#EC4899] transition-colors">
                      {set.title}
                    </h3>
                    <p className="text-white/40 text-xs">{set.word_count} คำ · {set.difficulty}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </main>
      </div>
    )
  }

  // ============ FINISHED SCREEN ============
  if (gameStatus === 'finished') {
    const percent = Math.round((score / WORDS_PER_ROUND) * 100)
    return (
      <div className="min-h-screen bg-main-gradient">
        <header className="bg-[#0F0F23]/90 backdrop-blur-md border-b border-white/10">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-[#EC4899] transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm">กลับหน้าหลัก</span>
            </Link>
            <span className="font-heading text-white text-lg">🎮 Hangman</span>
            <div className="w-20" />
          </div>
        </header>

        <main className="max-w-lg mx-auto px-4 py-12 text-center">
          <div className="bg-[#1A1A2E] rounded-2xl p-8 border border-white/5">
            <p className="text-5xl mb-4">{percent >= 80 ? '🏆' : percent >= 50 ? '🎉' : '💪'}</p>
            <h2 className="font-heading text-white text-2xl mb-2">จบรอบแล้ว!</h2>
            <p className="text-white/60 mb-6">
              {vocabularySets.find(s => s.id === selectedSetId)?.title || 'ทุกวิชา'}
            </p>

            <div className="flex justify-center gap-8 mb-6">
              <div>
                <p className="text-3xl font-heading text-[#4ADE80]">{score}</p>
                <p className="text-white/40 text-xs">ถูก</p>
              </div>
              <div>
                <p className="text-3xl font-heading text-[#F87171]">{WORDS_PER_ROUND - score}</p>
                <p className="text-white/40 text-xs">ผิด</p>
              </div>
              <div>
                <p className="text-3xl font-heading text-[#EC4899]">{percent}%</p>
                <p className="text-white/40 text-xs">คะแนน</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setGameStatus('selecting')} className="flex-1 bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition-colors font-semibold">
                เลือกวิชาใหม่
              </button>
              <button onClick={() => startGame(selectedSetId || 'all')} className="flex-1 btn-pink text-white font-semibold py-3 rounded-xl">
                เล่นอีกครั้ง!
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // ============ GAME PLAYING SCREEN ============
  return (
    <div className="min-h-screen bg-main-gradient">
      <header className="bg-[#0F0F23]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-[#EC4899] transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm">กลับหน้าหลัก</span>
          </Link>
          <span className="font-heading text-white text-lg">🎮 Hangman</span>
          <button onClick={() => setGameStatus('selecting')} className="text-white/60 hover:text-[#EC4899] text-sm transition-colors">
            เปลี่ยนวิชา
          </button>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        {/* Progress & Stats */}
        <div className="flex justify-between mb-4 text-sm">
          <div className="bg-[#1A1A2E] rounded-xl px-4 py-2">
            <span className="text-[#9CA3AF]">ข้อ</span>
            <span className="text-[#EC4899] font-bold ml-2">{currentIndex + 1}/{WORDS_PER_ROUND}</span>
          </div>
          <div className="bg-[#1A1A2E] rounded-xl px-4 py-2">
            <span className="text-[#9CA3AF]">คะแนน</span>
            <span className="text-[#4ADE80] font-bold ml-2">{score}</span>
            <span className="text-white/30 mx-1">/</span>
            <span className="text-[#F87171] font-bold">{played - score}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-white/10 rounded-full mb-4">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / WORDS_PER_ROUND) * 100}%`, background: 'linear-gradient(90deg, #7C3AED, #EC4899)' }}
          />
        </div>

        {/* Game Card */}
        <div className="bg-[#1A1A2E] rounded-2xl p-6 border border-white/5">
          {currentWord && (
            <div className="text-center mb-4">
              <p className="text-[#9CA3AF] text-sm mb-1">ความหมาย:</p>
              <p className="text-white text-lg font-medium">{currentWord.meaning_th}</p>
              <span className="inline-block mt-2 px-3 py-0.5 text-xs rounded-full bg-[#EC4899]/20 text-[#F9A8D4] border border-[#EC4899]/30">
                {currentWord.part_of_speech}
              </span>
            </div>
          )}

          <HangmanDrawing wrongCount={wrongCount} />
          {renderWord()}

          {gameStatus === 'won' && (
            <div className="text-center mb-4">
              <p className="text-[#4ADE80] font-heading text-xl">🎊 ยอดเยี่ยม!</p>
              <p className="text-[#9CA3AF] text-sm mt-1">คำตอบ: <span className="text-white font-bold">{currentWord?.word}</span></p>
            </div>
          )}
          {gameStatus === 'lost' && (
            <div className="text-center mb-4">
              <p className="text-[#F87171] font-heading text-xl">💀 เสียใจด้วย!</p>
              <p className="text-[#9CA3AF] text-sm mt-1">คำตอบคือ: <span className="text-white font-bold">{currentWord?.word}</span></p>
            </div>
          )}

          {/* Keyboard */}
          <div className="grid grid-cols-7 gap-1.5 mt-4">
            {ALPHABET.map((letter) => {
              const isGuessed = guessedLetters.has(letter)
              const isCorrect = currentWord?.word.toUpperCase().includes(letter) && isGuessed
              const isWrong = !currentWord?.word.toUpperCase().includes(letter) && isGuessed
              return (
                <button key={letter} onClick={() => handleGuess(letter)} disabled={isGuessed || gameStatus !== 'playing'}
                  className={`h-10 rounded-lg font-bold text-sm transition-all
                    ${isCorrect ? 'bg-[#4ADE80]/20 text-[#4ADE80] border border-[#4ADE80]/30' : ''}
                    ${isWrong ? 'bg-[#F87171]/20 text-[#F87171]/50 border border-[#F87171]/20' : ''}
                    ${!isGuessed && gameStatus === 'playing' ? 'bg-white/10 text-white hover:bg-[#EC4899] hover:text-white active:scale-95' : ''}
                    ${!isGuessed && gameStatus !== 'playing' ? 'bg-white/5 text-white/20' : ''}
                  `}
                >{letter}</button>
              )
            })}
          </div>

          {/* Next Button */}
          {(gameStatus === 'won' || gameStatus === 'lost') && (
            <button onClick={nextWord} className="w-full mt-6 flex items-center justify-center gap-2 btn-pink text-white font-semibold py-3 rounded-xl">
              <SkipForward size={18} />
              {currentIndex + 1 >= WORDS_PER_ROUND ? 'ดูผลคะแนน' : 'คำถัดไป'}
            </button>
          )}
        </div>
      </main>
    </div>
  )
}
