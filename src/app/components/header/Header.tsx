import Image from 'next/image'
import logo from '@/assets/logo.png'
import basket from '@/assets/basket.png'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt='logo' className={styles.img} />
      <Image src={basket} alt='basket' className={styles.img} />
    </header>
  )
}

export default Header