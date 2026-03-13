'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Link from 'next/link'
import { BookOpen, Brain, Gamepad2, ArrowLeft, Shuffle } from 'lucide-react'
import { vocabularySets } from '@/data/vocabularySets'

type Mode = 'flashcard' | 'quiz' | 'hangman' | null

const modes = [
  {
    id: 'flashcard' as const,
    icon: BookOpen,
    emoji: '📖',
    title: 'Flashcard',
    subtitle: 'พลิกการ์ดเรียนคำศัพท์',
    description: 'เรียนรู้คำศัพท์ทีละคำ พร้อมความหมาย ตัวอย่างประโยค และเสียงอ่าน',
    gradient: 'from-[#7C3AED] to-[#A78BFA]',
    border: 'border-[#7C3AED]/30',
    hoverBorder: 'hover:border-[#A78BFA]/60',
    iconBg: 'bg-[#7C3AED]/20',
  },
  {
    id: 'quiz' as const,
    icon: Brain,
    emoji: '🧠',
    title: 'Quiz',
    subtitle: 'ทดสอบความรู้คำศัพท์',
    description: 'ตอบคำถาม 4 ตัวเลือก ทดสอบว่าจำคำศัพท์ได้แม่นแค่ไหน',
    gradient: 'from-[#EC4899] to-[#F472B6]',
    border: 'border-[#EC4899]/30',
    hoverBorder: 'hover:border-[#F472B6]/60',
    iconBg: 'bg-[#EC4899]/20',
  },
  {
    id: 'hangman' as const,
    icon: Gamepad2,
    emoji: '🎮',
    title: 'Hangman',
    subtitle: 'เกมทายคำศัพท์',
    description: 'ทายตัวอักษรจากความหมาย สุ่ม 20 คำต่อรอบ ท้าทายสุดๆ!',
    gradient: 'from-[#F59E0B] to-[#FBBF24]',
    border: 'border-[#F59E0B]/30',
    hoverBorder: 'hover:border-[#FBBF24]/60',
    iconBg: 'bg-[#F59E0B]/20',
  },
]

export default function HomePage() {
  const [selectedMode, setSelectedMode] = useState<Mode>(null)

  const getLink = (setId: string) => {
    switch (selectedMode) {
      case 'flashcard': return `/vocabulary-set/${setId}`
      case 'quiz': return `/vocabulary-set/${setId}/quiz`
      case 'hangman': return `/hangman?set=${setId}`
      default: return '/'
    }
  }

  const modeInfo = modes.find(m => m.id === selectedMode)

  return (
    <div className="min-h-screen bg-main-gradient">
      <Header />

      {/* Hero Section */}
      <section className="text-center py-10 px-4">
        <h1 className="font-thai text-white text-3xl sm:text-4xl md:text-5xl mb-3 leading-tight">
          คำศัพท์วิศวะ <span className="text-[#F9A8D4]">1,200</span> คำ
        </h1>
        <p className="font-thai text-white/80 text-base sm:text-lg max-w-lg mx-auto" style={{ fontWeight: 600 }}>
          ที่จะทำให้คุณเก่งขึ้น! เรียนรู้ผ่าน Flashcard, Quiz และเกม Hangman 🎯
        </p>
        <div className="flex justify-center gap-2 mt-4 text-sm text-white/60">
          <span className="bg-white/10 px-3 py-1 rounded-full">📖 12 วิชา</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">📚 1,200 คำ</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">🎮 3 โหมด</span>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 pb-16">
        {/* ============ MODE SELECTION ============ */}
        {selectedMode === null ? (
          <>
            <h2 className="font-thai text-white text-xl text-center mb-6">เลือกโหมดที่ต้องการ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {modes.map((mode) => {
                const Icon = mode.icon
                return (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedMode(mode.id)}
                    className={`bg-[#1A1A2E] rounded-2xl p-6 border ${mode.border} ${mode.hoverBorder} transition-all card-hover text-center group`}
                  >
                    <div className={`w-16 h-16 ${mode.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="font-heading text-white text-xl mb-1">
                      {mode.emoji} {mode.title}
                    </h3>
                    <p className="font-thai text-white/70 text-sm mb-2" style={{ fontWeight: 500 }}>
                      {mode.subtitle}
                    </p>
                    <p className="text-[#9CA3AF] text-xs leading-relaxed">
                      {mode.description}
                    </p>
                    <div className={`mt-4 py-2 rounded-xl bg-gradient-to-r ${mode.gradient} text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity`}>
                      เลือกโหมดนี้
                    </div>
                  </button>
                )
              })}
            </div>
          </>
        ) : (
          /* ============ SUBJECT SELECTION ============ */
          <>
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setSelectedMode(null)}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="text-sm">กลับเลือกโหมด</span>
              </button>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-2xl">{modeInfo?.emoji}</span>
                <span className="font-heading text-white text-lg">{modeInfo?.title}</span>
              </div>
            </div>

            <h2 className="font-thai text-white text-xl text-center mb-2">เลือกวิชาที่ต้องการ</h2>
            <p className="text-white/50 text-sm text-center mb-6">
              {selectedMode === 'hangman' ? 'สุ่ม 20 คำจากวิชาที่เลือก' : 'เลือกวิชาเพื่อเริ่มเรียน'}
            </p>

            {/* Random All (for Hangman) */}
            {selectedMode === 'hangman' && (
              <Link
                href="/hangman?set=all"
                className="flex items-center justify-center gap-3 w-full mb-4 bg-gradient-to-r from-[#EC4899] to-[#A78BFA] text-white font-heading text-lg py-4 rounded-2xl hover:opacity-90 transition-opacity"
              >
                <Shuffle size={24} />
                🎲 สุ่มจากทุกวิชา (1,200 คำ)
              </Link>
            )}

            {/* Subject Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {vocabularySets.map((set) => (
                <Link
                  key={set.id}
                  href={getLink(set.id)}
                  className="bg-[#1A1A2E] rounded-xl p-4 border border-white/5 hover:border-[#EC4899]/40 transition-all group card-hover"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{set.icon_url}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm truncate group-hover:text-[#EC4899] transition-colors">
                        {set.title}
                      </h3>
                      <p className="text-white/40 text-xs">{set.word_count} คำ · {set.difficulty}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center pb-8 text-sm">
        <p className="text-white/70 font-semibold">
          Made with ❤️ by{' '}
          <a href="https://www.stepupth.com" className="text-white hover:text-[#F9A8D4] hover:underline transition-colors">
            Step Up Academy
          </a>
        </p>
      </footer>
    </div>
  )
}
