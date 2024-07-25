import { Item } from '@/app/types'
import Link from 'next/link'
import Card from '../card/Card'
import styles from './Catalog.module.css';

type Props = {
  products: Item []
}
function Catalog({products}: Props) {
  return (
    <div className={styles.catalog}>
      <h2 className={styles.heading}>Каталог</h2>
      <div className={styles.wrapper}>
        {products.map(item => <Link key={item.id} href={`/${item.id}`}><Card {...item} /></Link>)}  
      </div>
    </div>
  )
}

export default Catalog