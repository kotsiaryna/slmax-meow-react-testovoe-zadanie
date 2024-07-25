"use client"
import Link from 'next/link'
import styles from './page.module.css';
 
export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Вернуться в каталог</Link>
    </div>
  )
}