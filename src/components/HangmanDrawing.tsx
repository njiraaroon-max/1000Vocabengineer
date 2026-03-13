'use client'

interface HangmanDrawingProps {
  wrongCount: number  // 0-6
}

export default function HangmanDrawing({ wrongCount }: HangmanDrawingProps) {
  return (
    <svg viewBox="0 0 200 250" className="w-full max-w-[200px] mx-auto">
      {/* Base */}
      <line x1="20" y1="230" x2="180" y2="230" stroke="white" strokeWidth="3" opacity="0.8" />
      {/* Pole */}
      <line x1="60" y1="230" x2="60" y2="20" stroke="white" strokeWidth="3" opacity="0.8" />
      {/* Top */}
      <line x1="60" y1="20" x2="140" y2="20" stroke="white" strokeWidth="3" opacity="0.8" />
      {/* Rope */}
      <line x1="140" y1="20" x2="140" y2="50" stroke="white" strokeWidth="3" opacity="0.8" />

      {/* Head - wrong 1 */}
      {wrongCount >= 1 && (
        <circle cx="140" cy="70" r="20" stroke="#EC4899" strokeWidth="3" fill="none" className="hangman-part" />
      )}
      {/* Body - wrong 2 */}
      {wrongCount >= 2 && (
        <line x1="140" y1="90" x2="140" y2="150" stroke="#EC4899" strokeWidth="3" className="hangman-part" />
      )}
      {/* Left Arm - wrong 3 */}
      {wrongCount >= 3 && (
        <line x1="140" y1="110" x2="110" y2="135" stroke="#EC4899" strokeWidth="3" className="hangman-part" />
      )}
      {/* Right Arm - wrong 4 */}
      {wrongCount >= 4 && (
        <line x1="140" y1="110" x2="170" y2="135" stroke="#EC4899" strokeWidth="3" className="hangman-part" />
      )}
      {/* Left Leg - wrong 5 */}
      {wrongCount >= 5 && (
        <line x1="140" y1="150" x2="110" y2="190" stroke="#EC4899" strokeWidth="3" className="hangman-part" />
      )}
      {/* Right Leg - wrong 6 */}
      {wrongCount >= 6 && (
        <line x1="140" y1="150" x2="170" y2="190" stroke="#EC4899" strokeWidth="3" className="hangman-part" />
      )}

      {/* Face when dead */}
      {wrongCount >= 6 && (
        <>
          {/* X eyes */}
          <line x1="130" y1="63" x2="137" y2="70" stroke="#F87171" strokeWidth="2" />
          <line x1="137" y1="63" x2="130" y2="70" stroke="#F87171" strokeWidth="2" />
          <line x1="143" y1="63" x2="150" y2="70" stroke="#F87171" strokeWidth="2" />
          <line x1="150" y1="63" x2="143" y2="70" stroke="#F87171" strokeWidth="2" />
          {/* Sad mouth */}
          <path d="M 132 80 Q 140 75 148 80" stroke="#F87171" strokeWidth="2" fill="none" />
        </>
      )}
    </svg>
  )
}
