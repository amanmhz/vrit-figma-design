import { coursesIntro } from '../../../constants/content'
import styles from './CoursesHeader.module.css'

export function CoursesHeader() {
  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>{coursesIntro.eyebrow}</p>
      <h2 id="courses-heading" className={styles.heading}>
        {coursesIntro.headingLead}
        <span className={styles.highlight}>{coursesIntro.headingHighlight}</span>
      </h2>
    </header>
  )
}
