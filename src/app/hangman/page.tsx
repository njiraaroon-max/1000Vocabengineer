'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ArrowLeft, SkipForward, RotateCcw } from 'lucide-react'
import HangmanDrawing from '@/components/HangmanDrawing'
import confetti from 'canvas-confetti'
import { getAllVocabularies } from '@/data/vocabularySets'
import type { Vocabulary } from '@/types/database'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const MAX_WRONG = 6

export default function HangmanPage() {
  const [allWords, setAllWords] = useState<Vocabulary[]>([])
  const [currentWord, setCurrentWord] = useState<Vocabulary | null>(null)
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set())
  const [wrongCount, setWrongCount] = useState(0)
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing')
  const [played, setPlayed] = useState(0)
  const [remainingCount, setRemainingCount] = useState(0)
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set())

  useEffect(() => {
    const words = getAllVocabularies()
    setAllWords(words)
    setRemainingCount(words.length)
    pickNewWord(words, new Set())
  }, [])

  const pickNewWord = (words: Vocabulary[], used: Set<string>) => {
    const available = words.filter(w => !used.has(w.id))
    if (available.length === 0) {
      // Reset if all words used
      setUsedWords(new Set())
      const random = words[Math.floor(Math.random() * words.length)]
      setCurrentWord(random)
      setRemainingCount(words.length)
      return
    }
    const random = available[Math.floor(Math.random() * available.length)]
    setCurrentWord(random)
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
      }
    } else {
      // Check if won
      const allRevealed = wordUpper.split('').every(l => newGuessed.has(l))
      if (allRevealed) {
        setGameStatus('won')
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#EC4899', '#F472B6', '#A78BFA', '#FFFFFF']
        })
      }
    }
  }, [gameStatus, currentWord, guessedLetters, wrongCount])

  // Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase()
      if (ALPHABET.includes(key)) {
        handleGuess(key)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleGuess])

  const handleNextGame = () => {
    if (!currentWord) return
    const newUsed = new Set(usedWords)
    newUsed.add(currentWord.id)
    setUsedWords(newUsed)
    setPlayed(prev => prev + 1)
    setRemainingCount(prev => Math.max(0, prev - 1))
    pickNewWord(allWords, newUsed)
  }

  const renderWord = () => {
    if (!currentWord) return null
    const word = currentWord.word.toUpperCase()
    return (
      <div className="flex flex-wrap justify-center gap-2 my-6">
        {word.split('').map((char, i) => {
          if (char === ' ' || char === '-') {
            return <span key={i} className="w-4" />
          }
          const isRevealed = guessedLetters.has(char) || gameStatus === 'lost' || gameStatus === 'won'
          return (
            <span
              key={i}
              className={`w-10 h-12 flex items-center justify-center border-b-3 text-2xl font-heading
                ${isRevealed ? 'text-white border-[#EC4899]' : 'border-white/30'}
                ${gameStatus === 'lost' && !guessedLetters.has(char) ? 'text-[#F87171]' : ''}
              `}
            >
              {isRevealed ? char : ''}
            </span>
          )
        })}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-main-gradient">
      {/* Header */}
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

      <main className="max-w-lg mx-auto px-4 py-6">
        {/* Game Stats */}
        <div className="flex justify-between mb-4 text-sm">
          <div className="bg-[#1A1A2E] rounded-xl px-4 py-2">
            <span className="text-[#9CA3AF]">เล่นไปแล้ว 🎉</span>
            <span className="text-[#EC4899] font-bold ml-2">{played}</span>
          </div>
          <div className="bg-[#1A1A2E] rounded-xl px-4 py-2">
            <span className="text-[#9CA3AF]">เหลืออีก ✌🏻</span>
            <span className="text-[#EC4899] font-bold ml-2">{remainingCount}</span>
          </div>
        </div>

        {/* Game Card */}
        <div className="bg-[#1A1A2E] rounded-2xl p-6 border border-white/5">
          {/* Clue */}
          {currentWord && (
            <div className="text-center mb-4">
              <p className="text-[#9CA3AF] text-sm mb-1">ความหมาย:</p>
              <p className="text-white text-lg font-medium">{currentWord.meaning_th}</p>
              <span className="inline-block mt-2 px-3 py-0.5 text-xs rounded-full bg-[#EC4899]/20 text-[#F9A8D4] border border-[#EC4899]/30">
                {currentWord.part_of_speech}
              </span>
            </div>
          )}

          {/* Hangman Drawing */}
          <HangmanDrawing wrongCount={wrongCount} />

          {/* Word Display */}
          {renderWord()}

          {/* Game Over Messages */}
          {gameStatus === 'won' && (
            <div className="text-center mb-4">
              <p className="text-[#4ADE80] font-heading text-xl">🎊 ยอดเยี่ยม!</p>
              <p className="text-[#9CA3AF] text-sm mt-1">
                คำตอบ: <span className="text-white font-bold">{currentWord?.word}</span>
              </p>
            </div>
          )}
          {gameStatus === 'lost' && (
            <div className="text-center mb-4">
              <p className="text-[#F87171] font-heading text-xl">💀 เสียใจด้วย!</p>
              <p className="text-[#9CA3AF] text-sm mt-1">
                คำตอบคือ: <span className="text-white font-bold">{currentWord?.word}</span>
              </p>
            </div>
          )}

          {/* Keyboard */}
          <div className="grid grid-cols-7 gap-1.5 mt-4">
            {ALPHABET.map((letter) => {
              const isGuessed = guessedLetters.has(letter)
              const isCorrect = currentWord?.word.toUpperCase().includes(letter) && isGuessed
              const isWrong = !currentWord?.word.toUpperCase().includes(letter) && isGuessed

              return (
                <button
                  key={letter}
                  onClick={() => handleGuess(letter)}
                  disabled={isGuessed || gameStatus !== 'playing'}
                  className={`
                    h-10 rounded-lg font-bold text-sm transition-all
                    ${isCorrect ? 'bg-[#4ADE80]/20 text-[#4ADE80] border border-[#4ADE80]/30' : ''}
                    ${isWrong ? 'bg-[#F87171]/20 text-[#F87171]/50 border border-[#F87171]/20' : ''}
                    ${!isGuessed && gameStatus === 'playing' ? 'bg-white/10 text-white hover:bg-[#EC4899] hover:text-white active:scale-95' : ''}
                    ${!isGuessed && gameStatus !== 'playing' ? 'bg-white/5 text-white/20' : ''}
                  `}
                >
                  {letter}
                </button>
              )
            })}
          </div>

          {/* Action Buttons */}
          {gameStatus !== 'playing' && (
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => pickNewWord(allWords, usedWords)}
                className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition-colors"
              >
                <RotateCcw size={18} />
                คำก่อนหน้า
              </button>
              <button
                onClick={handleNextGame}
                className="flex-1 flex items-center justify-center gap-2 btn-pink text-white font-semibold py-3 rounded-xl"
              >
                <SkipForward size={18} />
                เกมต่อไป!
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
