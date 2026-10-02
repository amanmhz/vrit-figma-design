import { useState } from 'react'
import { AnimatePresence, motion, type Transition } from 'motion/react'
import handArrow from '../../../assets/icons/hand-arrow.svg'
import { gentleSpring, smartAnimateBack } from '../../../constants/motion'
import { ScaleToFit } from '../../layout/ScaleToFit/ScaleToFit'
import { StatCard } from './StatCard'
import { STAT_CARDS } from './statsContent'
import {
  COLLAPSED_WIDTH,
  STATS_HEIGHT,
  STATS_LAYOUTS,
  STATS_WIDTH,
  type CardId,
  type StatsState,
} from './statsLayouts'
import styles from './CourseStats.module.css'

type SelectedState = Extract<StatsState, 'default' | 'upcoming' | 'ongoing'>
type HoverTarget = Extract<CardId, 'upcoming' | 'ongoing'> | null

export function CourseStats() {
  const [selected, setSelected] = useState<SelectedState>('default')
  const [hovered, setHovered] = useState<HoverTarget>(null)
  const [transition, setTransition] = useState<Transition>(gentleSpring)

  const visualState: StatsState = selected === 'default' && hovered ? (hovered === 'upcoming' ? 'hoverUpcoming' : 'hoverOngoing') : selected
  const layout = STATS_LAYOUTS[visualState]

  const select = (next: SelectedState) => {
    if (next === selected) return
    setTransition(smartAnimateBack)
    setHovered(null)
    setSelected(next)
  }

  const hover = (target: HoverTarget) => {
    if (selected !== 'default') return
    setTransition(gentleSpring)
    setHovered(target)
  }

  return (
    <ScaleToFit width={STATS_WIDTH} height={STATS_HEIGHT} minScale={0.5}>
      <div className={styles.stats}>
        {STAT_CARDS.map((card) => {
          const cardLayout = layout[card.id]
          const collapsed = cardLayout.width <= COLLAPSED_WIDTH
          const onSelect = collapsed ? () => select(card.id === 'all' ? 'default' : card.id) : undefined
          const onHoverChange = card.id !== 'all' && selected === 'default' ? (isHovered: boolean) => hover(isHovered ? (card.id as HoverTarget) : null) : undefined

          return (
            <StatCard
              key={card.id}
              content={card}
              layout={cardLayout}
              transition={transition}
              onSelect={onSelect}
              onHoverChange={onHoverChange}
            />
          )
        })}

        <AnimatePresence>
          {layout.hint && (
            <motion.div
              key={visualState}
              className={styles.hint}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={gentleSpring}
              aria-hidden="true"
            >
              <span className={styles.hintLabel} style={{ left: layout.hint.label.x, top: layout.hint.label.y }}>
                Click me!
              </span>
              <img
                className={styles.hintArrow}
                src={handArrow}
                alt=""
                width={50}
                height={50}
                style={{
                  left: layout.hint.arrow.x,
                  top: layout.hint.arrow.y,
                  transform: `matrix(${layout.hint.arrow.matrix.join(', ')}, 0, 0)`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScaleToFit>
  )
}
