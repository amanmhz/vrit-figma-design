import type { KeyboardEvent } from 'react'
import { motion, type Transition } from 'motion/react'
import { ViewAllLink } from '../../ui/ViewAllLink/ViewAllLink'
import { COLLAPSED_WIDTH, type CardLayout } from './statsLayouts'
import type { StatCardContent } from './statsContent'
import { TechIcons } from './TechIcons'
import styles from './CourseStats.module.css'

interface StatCardProps {
  content: StatCardContent
  layout: CardLayout
  transition: Transition
  onSelect?: () => void
  onHoverChange?: (hovered: boolean) => void
}

export function StatCard({ content, layout, transition, onSelect, onHoverChange }: StatCardProps) {
  const expanded = layout.width > COLLAPSED_WIDTH
  const interactive = Boolean(onSelect)

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (!onSelect || (e.key !== 'Enter' && e.key !== ' ')) return
    e.preventDefault()
    onSelect()
  }

  return (
    <motion.article
      className={styles.card}
      data-interactive={interactive || undefined}
      initial={false}
      animate={{ x: layout.x, width: layout.width }}
      transition={transition}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-expanded={expanded}
      aria-label={`${content.count}+ ${content.title}`}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      onHoverStart={() => onHoverChange?.(true)}
      onHoverEnd={() => onHoverChange?.(false)}
    >
      <motion.span
        className={styles.ellipse}
        initial={false}
        animate={{
          x: layout.ellipse.x,
          y: layout.ellipse.y,
          width: layout.ellipse.size,
          height: layout.ellipse.size,
        }}
        transition={transition}
      />

      <motion.span
        className={styles.number}
        style={{ width: content.numberWidth }}
        initial={false}
        animate={{ x: layout.number.x, y: layout.number.y, color: layout.textColor }}
        transition={transition}
      >
        {content.count}
      </motion.span>

      <motion.div
        className={styles.titleGroup}
        style={{ originX: 0, originY: 0 }}
        initial={false}
        animate={{
          x: layout.titleGroup.x,
          y: layout.titleGroup.y,
          width: layout.titleGroup.width,
          rotate: layout.titleGroup.rotate,
          color: layout.textColor,
        }}
        transition={transition}
      >
        <h3 className={styles.title}>{content.title}</h3>
        <p className={styles.description}>{content.description}</p>
      </motion.div>

      <div className={styles.viewAll}>
        <ViewAllLink tabIndex={expanded ? 0 : -1} />
      </div>

      <motion.div
        className={styles.iconsWrap}
        initial={false}
        animate={{ x: layout.icons.x, y: layout.icons.y, opacity: layout.icons.opacity }}
        transition={transition}
        aria-hidden={!expanded}
      >
        <TechIcons />
      </motion.div>

      <motion.span
        className={styles.plus}
        aria-hidden="true"
        initial={false}
        animate={{ x: layout.plus.x, y: layout.plus.y, color: layout.plus.color }}
        transition={transition}
      >
        +
      </motion.span>
    </motion.article>
  )
}
