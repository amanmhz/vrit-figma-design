import { carouselSlides, partners } from '../../constants/content'
import { Section } from '../../components/layout/Section/Section'
import { ServicesHero } from '../../components/sections/ServicesHero/ServicesHero'
import { ImageCarousel } from '../../components/sections/ImageCarousel/ImageCarousel'
import { Partners } from '../../components/sections/Partners/Partners'
import { CoursesHeader } from '../../components/sections/CoursesHeader/CoursesHeader'
import { CourseStats } from '../../components/sections/CourseStats/CourseStats'
import styles from './Home.module.css'

export function Home() {
  return (
    <main>
      <Section id="services" paddingBlock={137} maxWidth={1218} labelledBy="services-heading">
        <div className={styles.servicesStack}>
          <ServicesHero />
          <ImageCarousel slides={carouselSlides} />
          <Partners partners={partners} />
        </div>
      </Section>

      <Section id="courses" paddingBlock={100} maxWidth={1216} labelledBy="courses-heading">
        <div className={styles.coursesStack}>
          <CoursesHeader />
          <CourseStats />
        </div>
      </Section>
    </main>
  )
}
