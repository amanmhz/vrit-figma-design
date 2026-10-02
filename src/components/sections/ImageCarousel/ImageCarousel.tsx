import { useCallback, useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type WheelEvent } from 'react'
import { animate, motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import type { CarouselSlide } from '../../../constants/content'
import { EASE_OUT_CUBIC } from '../../../constants/motion'
import styles from './ImageCarousel.module.css'

interface ImageCarouselProps {
  slides: CarouselSlide[]
}

const THUMB_RATIO = 292.54 / 1218
const DRAG_REST = { x: (543 + 66) / 1012, y: (218.63 + 66) / 569.25 }
const cursorSpring = { stiffness: 350, damping: 30, mass: 0.6 }

export function ImageCarousel({ slides }: ImageCarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [bleed, setBleed] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [rest, setRest] = useState({ x: 609, y: 284.63 })
  const [dragging, setDragging] = useState(false)

  const x = useMotionValue(0)
  const thumbLeft = useTransform(x, (v) => `${(maxScroll ? Math.min(1, Math.max(0, -v / maxScroll)) : 0) * (1 - THUMB_RATIO) * 100}%`)

  const cursorX = useSpring(rest.x, cursorSpring)
  const cursorY = useSpring(rest.y, cursorSpring)

  const measure = useCallback(() => {
    const root = rootRef.current
    const track = trackRef.current
    if (!root || !track) return
    const rect = root.getBoundingClientRect()
    const nextBleed = Math.max(0, document.documentElement.clientWidth - rect.right)
    setBleed(nextBleed)
    const viewportWidth = rect.width + nextBleed
    const nextMax = Math.max(0, track.scrollWidth - viewportWidth)
    setMaxScroll(nextMax)
    if (-x.get() > nextMax) x.set(-nextMax)

    const firstSlide = track.firstElementChild as HTMLElement | null
    if (firstSlide) {
      const next = { x: firstSlide.offsetWidth * DRAG_REST.x, y: firstSlide.offsetHeight * DRAG_REST.y }
      setRest(next)
      cursorX.jump(next.x)
      cursorY.jump(next.y)
    }
  }, [x, cursorX, cursorY])

  useLayoutEffect(() => {
    measure()
    const observer = new ResizeObserver(measure)
    if (rootRef.current) observer.observe(rootRef.current)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  const scrollTo = (target: number) => {
    animate(x, Math.min(0, Math.max(-maxScroll, target)), { duration: 0.5, ease: EASE_OUT_CUBIC })
  }

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const rect = e.currentTarget.getBoundingClientRect()
    cursorX.set(e.clientX - rect.left)
    cursorY.set(e.clientY - rect.top)
  }

  const handlePointerLeave = () => {
    cursorX.set(rest.x)
    cursorY.set(rest.y)
  }

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return
    x.set(Math.min(0, Math.max(-maxScroll, x.get() - e.deltaX)))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = (trackRef.current?.firstElementChild as HTMLElement | null)?.offsetWidth ?? 1012
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      scrollTo(x.get() - step - 20)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      scrollTo(x.get() + step + 20)
    }
  }

  return (
    <div ref={rootRef} className={styles.carousel}>
      <div
        ref={viewportRef}
        className={styles.viewport}
        style={{ '--bleed': `${bleed}px` } as CSSProperties}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Project gallery. Drag or use the arrow keys to browse."
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
      >
        <motion.div
          ref={trackRef}
          className={styles.track}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxScroll, right: 0 }}
          dragElastic={0.08}
          dragTransition={{ power: 0.25, timeConstant: 260 }}
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
        >
          {slides.map((slide, i) => (
            <div key={i} className={styles.slide} style={{ backgroundColor: slide.placeholder }}>
              <img src={slide.src} alt={slide.alt} draggable={false} loading={i < 2 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </motion.div>

        <motion.div
          className={styles.dragBubble}
          style={{ x: cursorX, y: cursorY }}
          animate={{ scale: dragging ? 0.82 : 1 }}
          transition={{ duration: 0.3, ease: EASE_OUT_CUBIC }}
          aria-hidden="true"
        >
          Drag
        </motion.div>
      </div>

      <div className={styles.progress} aria-hidden="true">
        <motion.span className={styles.thumb} style={{ left: thumbLeft, width: `${THUMB_RATIO * 100}%` }} />
      </div>
    </div>
  )
}
