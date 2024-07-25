import Image from 'next/image'
import logo from '@/assets/logo.png'
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contacts}>
        здесь могли бы быть наши контакты
      </div>
      <Image src={logo} alt='logo' className={styles.img} />
    </div>
  )
}

export default Footer