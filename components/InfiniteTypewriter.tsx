'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const MESSAGES = [
  { text: "Merhaba!", lang: "tr" },
  { text: "Hello!", lang: "en" },
  { text: "Bonjour!", lang: "fr" },
  { text: "Hola!", lang: "es" }
]

export function InfiniteTypewriter() {
  const [messageIndex, setMessageIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const type = useCallback(() => {
    const currentMessage = MESSAGES[messageIndex].text
    const typingSpeed = isDeleting ? 40 : 80
    const pauseTime = 2000

    if (!isDeleting && displayedText === currentMessage) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime)
      return
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false)
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length)
      return
    }

    if (!isDeleting) {
      setDisplayedText(currentMessage.substring(0, displayedText.length + 1))
    } else {
      setDisplayedText(currentMessage.substring(0, displayedText.length - 1))
    }
  }, [displayedText, isDeleting, messageIndex])

  useEffect(() => {
    const currentMessage = MESSAGES[messageIndex].text
    const typingSpeed = isDeleting ? 40 : 80

    timeoutRef.current = setTimeout(type, typingSpeed)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [type, isDeleting, messageIndex])

  return (
    <span style={{ fontFamily: 'var(--font-playwrite)' }} className="font-normal flex items-center gap-3">
      <span>
        {displayedText}
      </span>
      <span className="wave-hand text-5xl" style={{ 
        filter: 'grayscale(100%)',
        opacity: 0.7
      }}>
        👋
      </span>
    </span>
  )
}

