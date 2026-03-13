'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import VocabSetCard from '@/components/VocabSetCard'
import Link from 'next/link'
import { Gamepad2 } from 'lucide-react'
import { vocabularySets as vocabularySetsData } from '@/data/vocabularySets'
import type { VocabularySet, SetStats } from '@/types/database'

type SetWithStats = VocabularySet & { stats: SetStats }

export default function HomePage() {
  const [sets, setSets] = useState<SetWithStats[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Use local data
    setSets(vocabularySetsData)
    setLoading(false)
  }, [])

  return (
    <div className="min-h-screen bg-main-gradient">
      <Header />

      {/* Hero Section */}
      <section className="text-center py-10 px-4">
        <h1 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl mb-3 leading-tight">
          คำศัพท์วิศวะ <span className="text-[#F9A8D4]">1,000</span> คำ
        </h1>
        <p className="text-white/80 text-base sm:text-lg max-w-lg mx-auto">
          ที่จะทำให้คุณเก่งขึ้น! เรียนรู้ผ่าน Flashcard, Quiz และเกม Hangman 🎯
        </p>
        <div className="flex justify-center gap-2 mt-4 text-sm text-white/60">
          <span className="bg-white/10 px-3 py-1 rounded-full">⚙️ 6 ชุด</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">📚 180+ คำ</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">🎮 3 โหมด</span>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        {/* Hangman Card */}
        <Link
          href="/hangman"
          className="block mb-8 bg-gradient-to-r from-[#1A1A2E] to-[#2D1B4E] rounded-2xl p-6 card-hover border border-[#EC4899]/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#EC4899]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Gamepad2 size={32} className="text-[#EC4899]" />
            </div>
            <div>
              <h2 className="font-heading text-white text-xl mb-1">
                🎮 เกม Hangman
              </h2>
              <p className="text-[#9CA3AF] text-sm">
                ทายคำศัพท์วิศวกรรมจากความหมาย — ท้าทายความรู้ของคุณ!
              </p>
            </div>
            <div className="ml-auto hidden sm:block">
              <span className="btn-pink text-white px-4 py-2 rounded-xl font-semibold text-sm inline-block">
                เล่นเลย!
              </span>
            </div>
          </div>
        </Link>

        {/* Vocabulary Sets Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#1A1A2E] rounded-2xl p-5 animate-pulse h-52" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sets.map((set) => (
              <VocabSetCard key={set.id} set={set} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center pb-8 text-white/40 text-sm">
        <p>
          Made with ❤️ by{' '}
          <a href="https://www.stepupth.com" className="text-[#EC4899] hover:underline">
            Step Up Academy
          </a>
        </p>
      </footer>
    </div>
  )
}
