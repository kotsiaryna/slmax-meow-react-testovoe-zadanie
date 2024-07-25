"use client"
import Link from 'next/link';
import styles from './page.module.css';

type Props ={
  error: Error
}

function ErrorPage({error}: Props) {
  return (
    <section className={styles.error}>
      <h2>Something went wrong</h2>
      <div>{error.message}</div>
      <Link href='/'>Вернуться в каталог</Link>
    </section>
  )
}

export default ErrorPage