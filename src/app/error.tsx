"use client"
import styles from './page.module.css';

type Props ={
  error: Error
}

function ErrorPage({error}: Props) {
  return (
    <section className={styles.error}>
      <h2>Something went wrong</h2>
      <div>{error.message}</div>
    </section>
  )
}

export default ErrorPage