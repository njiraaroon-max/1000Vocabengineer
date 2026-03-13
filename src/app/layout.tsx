import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EngineeringVocab — คำศัพท์วิศวกรรม 1,200 คำ',
  description: 'เรียนรู้คำศัพท์วิศวกรรมภาษาอังกฤษ 1,200 คำ ผ่าน Flashcard, Quiz และเกม Hangman',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
