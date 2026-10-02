import type { CSSProperties, ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id?: string
  paddingBlock: number
  maxWidth?: number
  labelledBy?: string
  children: ReactNode
}

export function Section({ id, paddingBlock, maxWidth = 1218, labelledBy, children }: SectionProps) {
  const style = {
    '--section-padding-block': `${paddingBlock}px`,
    '--section-max-width': `${maxWidth}px`,
  } as CSSProperties

  return (
    <section id={id} className={styles.section} style={style} aria-labelledby={labelledBy}>
      <div className={styles.inner}>{children}</div>
    </section>
  )
}
