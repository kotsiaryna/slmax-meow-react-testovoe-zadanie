import Image from 'next/image';
import { Item } from "@/app/types"
import styles from './Card.module.css' 
import img from '@/assets/product.png'

function Card({name, description, price }: Item) {
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>{name}</h3>
      <Image src={img} alt='Товар' className={styles.image} priority={true}/>
      <p className={styles.description}>{description}</p>
      <div className={styles.price}>{price} бел. руб.</div>
    </div>
  )
}

export default Card