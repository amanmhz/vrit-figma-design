import type { CSSProperties } from 'react'
import type { Partner } from '../../../constants/content'
import styles from './Partners.module.css'

interface PartnersProps {
  title?: string
  partners: Partner[]
}

function logoImageStyle({ width, height, crop }: Partner): CSSProperties {
  if (!crop) return { width: '100%', height: '100%', objectFit: 'contain' }
  const [scaleX, offsetX, scaleY, offsetY] = crop
  const imageWidth = width / scaleX
  const imageHeight = height / scaleY
  return {
    width: imageWidth,
    height: imageHeight,
    left: -offsetX * imageWidth,
    top: -offsetY * imageHeight,
  }
}

export function Partners({ title = 'Our Partners', partners }: PartnersProps) {
  return (
    <div className={styles.partners}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {partners.map((partner) => (
          <li key={partner.name} className={styles.item}>
            <span className={styles.logo} style={{ width: partner.width, height: partner.height }}>
              <img src={partner.logo} alt={partner.name} style={logoImageStyle(partner)} loading="lazy" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
