import iconReact from '../../../assets/icons/icon-react.svg'
import iconSocial from '../../../assets/icons/icon-social.svg'
import iconVue from '../../../assets/icons/icon-vue.svg'
import iconDesign from '../../../assets/icons/icon-design.svg'
import styles from './CourseStats.module.css'

const ICONS = [
  { src: iconReact, alt: 'React', x: 0, y: 21.514, width: 75, height: 75, rotate: -16.67, shadow: false },
  { src: iconSocial, alt: 'Social media', x: 144.783, y: 4.768, width: 75, height: 75, rotate: 7.22, shadow: true },
  { src: iconVue, alt: 'Vue.js', x: 261.189, y: 13.988, width: 55.747, height: 75, rotate: -8.97, shadow: true },
  { src: iconDesign, alt: 'Design', x: 386.332, y: 1.897, width: 75, height: 75, rotate: 12.61, shadow: false },
]

export function TechIcons() {
  return (
    <div className={styles.icons}>
      {ICONS.map((icon) => (
        <img
          key={icon.alt}
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
          draggable={false}
          className={icon.shadow ? `${styles.icon} ${styles.iconShadow}` : styles.icon}
          style={{ left: icon.x, top: icon.y, transform: `rotate(${icon.rotate}deg)` }}
        />
      ))}
    </div>
  )
}
