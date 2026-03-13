'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LogIn, User } from 'lucide-react'

export default function Header() {
  const [isLoggedIn] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0F0F23]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Step Up Academy"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-heading text-white text-lg hidden sm:inline">
            Engineering<span className="text-[#EC4899]">Vocab</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <button className="w-8 h-8 rounded-full bg-[#EC4899] flex items-center justify-center">
              <User size={18} />
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1.5 btn-pink text-white px-3 py-1.5 rounded-lg font-semibold text-sm"
            >
              <LogIn size={16} />
              <span className="hidden sm:inline">เข้าสู่ระบบ</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
