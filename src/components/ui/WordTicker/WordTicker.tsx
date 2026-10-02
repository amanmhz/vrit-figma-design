import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { smartAnimateFast, TICKER_DELAY_MS } from '../../../constants/motion'
import { useInterval } from '../../../hooks/useInterval'
import styles from './WordTicker.module.css'

const STATES = [
  { height: 53, offsets: [0, 88, 176] },
  { height: 53, offsets: [-92.5, -4.5, 83.5] },
  { height: 66, offsets: [-172, -84, 4] },
] as const

interface WordTickerProps {
  words: readonly [string, string, string]
}

export function WordTicker({ words }: WordTickerProps) {
  const [tick, setTick] = useState(0)
  const reduceMotion = useReducedMotion()

  useInterval(() => setTick((t) => t + 1), reduceMotion ? null : TICKER_DELAY_MS + 300)

  return (
    <div className={styles.ticker}>
      <ul className="sr-only">
        {words.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
      {STATES.map((_, slot) => {
        const state = STATES[(slot + tick) % STATES.length]
        return (
          <motion.div
            key={slot}
            className={styles.slot}
            aria-hidden="true"
            initial={false}
            animate={{ height: state.height }}
            transition={smartAnimateFast}
          >
            {words.map((word, i) => (
              <motion.span
                key={word}
                className={styles.word}
                initial={false}
                animate={{ y: state.offsets[i] }}
                transition={smartAnimateFast}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )
      })}
    </div>
  )
}
