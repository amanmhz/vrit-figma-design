import { servicesHero } from '../../../constants/content'
import { Button } from '../../ui/Button/Button'
import { WordTicker } from '../../ui/WordTicker/WordTicker'
import styles from './ServicesHero.module.css'

export function ServicesHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.intro}>
        <h1 id="services-heading" className={styles.description}>
          {servicesHero.description}
        </h1>
        <Button>{servicesHero.ctaLabel}</Button>
      </div>
      <div className={styles.services}>
        <WordTicker words={servicesHero.services} />
      </div>
    </div>
  )
}
