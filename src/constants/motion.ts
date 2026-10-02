import type { Transition } from 'motion/react'

export const EASE_OUT_CUBIC = [0, 0, 0.58, 1] as const
export const EASE_IN_OUT_BACK_CUBIC = [0.7, -0.4, 0.4, 1.4] as const

export const smartAnimateFast: Transition = { duration: 0.3, ease: EASE_OUT_CUBIC }

export const smartAnimateMedium: Transition = { duration: 0.5, ease: EASE_OUT_CUBIC }

export const smartAnimateBack: Transition = { duration: 1, ease: EASE_IN_OUT_BACK_CUBIC }

export const gentleSpring: Transition = { type: 'spring', mass: 1, stiffness: 100, damping: 15 }

export const TICKER_DELAY_MS = 3000
