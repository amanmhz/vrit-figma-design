import { useState, type ButtonHTMLAttributes } from 'react'
import { motion } from 'motion/react'
import { smartAnimateFast } from '../../../constants/motion'
import styles from './Button.module.css'

type ButtonState = 'default' | 'hover' | 'pressed'

const variants = {
  default: { backgroundColor: '#1253ed', boxShadow: '0 0 0 0px rgba(184, 204, 253, 0)' },
  hover: { backgroundColor: '#013ecf', boxShadow: '0 0 0 0px rgba(184, 204, 253, 0)' },
  pressed: { backgroundColor: '#1253ed', boxShadow: '0 0 0 4px rgba(184, 204, 253, 1)' },
}

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'
>

export function Button({ children, className, onClick, ...rest }: ButtonProps) {
  const [state, setState] = useState<ButtonState>('default')

  return (
    <motion.button
      type="button"
      className={[styles.button, className].filter(Boolean).join(' ')}
      variants={variants}
      initial={false}
      animate={state}
      transition={smartAnimateFast}
      onHoverStart={() => setState((s) => (s === 'pressed' ? s : 'hover'))}
      onHoverEnd={() => setState('default')}
      onFocus={(e) => e.currentTarget.matches(':focus-visible') && setState('pressed')}
      onBlur={() => setState('default')}
      onClick={(e) => {
        setState('pressed')
        onClick?.(e)
      }}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
