'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function TWLogo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <Image
        src="/TWLogo.png"
        alt="TW Surface Company"
        width={40}
        height={40}
        className="object-contain"
        priority
      />
      {showText && (
        <span className="text-xl font-bold text-stone-900 tracking-tight">
          The Workshop
        </span>
      )}
    </div>
  )
}

export function TWLogoMinimal({ className }: { className?: string }) {
  let transition = {
    duration: 0.3,
    ease: 'easeInOut' as const,
  }

  return (
    <motion.div
      className={clsx('relative', className)}
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
    >
      <motion.div
        className="text-3xl font-bold tracking-tighter"
        style={{
          background: 'linear-gradient(135deg, #27272a 0%, #52525b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        whileHover={{
          background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
          scale: 1.05,
        }}
        transition={transition}
      >
        TW
      </motion.div>
    </motion.div>
  )
}

export function TWLogoText({ className }: { className?: string }) {
  return (
    <Image
      src="/TWLogo.png"
      alt="The Workshop Surface Company"
      width={220}
      height={80}
      className={clsx('object-contain', className)}
      priority
    />
  )
}