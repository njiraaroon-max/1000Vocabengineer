'use client'

import Link from 'next/link'
import { Heart, Share2, BookOpen } from 'lucide-react'
import type { VocabularySet, SetStats } from '@/types/database'

const difficultyConfig = {
  easy: { label: 'Easy', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  medium: { label: 'Medium', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  hard: { label: 'Hard', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
}

const flagEmoji: Record<string, string> = {
  'en-th': '🇬🇧 → 🇹🇭',
  'en-en': '🇬🇧 → 🇬🇧',
}

interface VocabSetCardProps {
  set: VocabularySet & { stats?: SetStats }
}

export default function VocabSetCard({ set }: VocabSetCardProps) {
  const diff = difficultyConfig[set.difficulty]

  return (
    <div className="bg-[#1A1A2E] rounded-2xl p-5 card-hover border border-white/5">
      {/* Language pair & difficulty */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-[#9CA3AF]">
          {flagEmoji[set.language_pair] || set.language_pair}
        </span>
        <span className={`text-xs px-2 py-0.5 rounded-full border ${diff.color}`}>
          {diff.label}
        </span>
      </div>

      {/* Icon & Title */}
      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl">{set.icon_url}</span>
        <div>
          <h3 className="font-heading text-white text-lg leading-tight">
            {set.title}
          </h3>
          <p className="text-xs text-[#9CA3AF] mt-1 line-clamp-2">
            {set.description}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 text-xs text-[#9CA3AF] mb-4">
        <span className="flex items-center gap-1">
          <Heart size={14} className="text-[#EC4899]" />
          {set.stats?.likes ?? 0}
        </span>
        <span className="flex items-center gap-1">
          <Share2 size={14} className="text-blue-400" />
          {set.stats?.shares ?? 0}
        </span>
        <span className="flex items-center gap-1">
          <BookOpen size={14} className="text-green-400" />
          {set.word_count} คำ
        </span>
      </div>

      {/* CTA Button */}
      <Link
        href={`/vocabulary-set/${set.id}`}
        className="block w-full text-center btn-pink text-white font-semibold py-2.5 rounded-xl text-sm"
      >
        เริ่มเรียนเลย →
      </Link>
    </div>
  )
}
