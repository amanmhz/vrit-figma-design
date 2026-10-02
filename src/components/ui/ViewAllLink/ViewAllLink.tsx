import { useState } from 'react'
import { motion } from 'motion/react'
import { EASE_OUT_CUBIC, smartAnimateFast } from '../../../constants/motion'
import { ArrowRightIcon } from '../ArrowRightIcon/ArrowRightIcon'
import styles from './ViewAllLink.module.css'

interface ViewAllLinkProps {
  href?: string
  label?: string
  tabIndex?: number
}

export function ViewAllLink({ href = '#courses', label = 'View all Courses', tabIndex }: ViewAllLinkProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={href}
      className={styles.link}
      tabIndex={tabIndex}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={(e) => e.stopPropagation()}
    >
      <span>{label}</span>
      <motion.span
        className={styles.icon}
        animate={hovered ? { x: [0, 8, 0] } : { x: 0 }}
        transition={
          hovered
            ? { duration: 1, times: [0, 0.5, 1], ease: [EASE_OUT_CUBIC, EASE_OUT_CUBIC], repeat: Infinity }
            : smartAnimateFast
        }
      >
        <ArrowRightIcon />
      </motion.span>
    </motion.a>
  )
}
