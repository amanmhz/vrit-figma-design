import type { ReactNode } from 'react'
import { useElementSize } from '../../../hooks/useElementSize'
import styles from './ScaleToFit.module.css'

interface ScaleToFitProps {
  width: number
  height: number
  minScale?: number
  children: ReactNode
}

export function ScaleToFit({ width, height, minScale = 0, children }: ScaleToFitProps) {
  const [ref, size] = useElementSize<HTMLDivElement>()
  const fitScale = size.width ? Math.min(1, size.width / width) : 1
  const scale = Math.max(minScale, fitScale)
  const overflows = scale > fitScale

  return (
    <div ref={ref} className={styles.outer} data-overflow={overflows || undefined}>
      <div className={styles.sizer} style={{ width: width * scale, height: height * scale }}>
        <div className={styles.inner} style={{ width, height, transform: `scale(${scale})` }}>
          {children}
        </div>
      </div>
    </div>
  )
}
