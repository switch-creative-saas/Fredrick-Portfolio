'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-blue-50 via-blue-25 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 pointer-events-none">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="animate-pulse">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            CLEARSKIES
          </h1>
        </div>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}
