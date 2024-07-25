import Link from "next/link";
import styles from './page.module.css'
import Image from "next/image";
import img from '@/assets/product.png';

type Props = {
  params: { id: string }
}
type Item = {
  id: number,
  name: string;
  description: string;
  price: number
}

const getProductById = async (id: string): Promise<Item | undefined> => {
  const res = await fetch(`http://localhost:3000/goods/${id}`, {next: {revalidate: 60}})
  if (!res.ok) {
    throw new Error('Failed to fetch product')
  }
  if(res.status === 404) {
    return 
  }
  
  return res.json()
}

export async function generateStaticParams () {
  const resp = await fetch('http://localhost:3000/goods')
  const data = await resp.json() as Item[]

  const goodsIDs = data.map(item => ({id: `${item.id}`}))

  return goodsIDs
}

export default async function Page({ params } :Props ) {
  const product = await getProductById(params.id)
  if(!product) {
    return <div>Product not found</div>
  }
  return <div className={styles.product}>
    <Link href='/' className={styles.back}>Вернуться в каталог</Link>
    <h2 className={styles.heading}>{product.name}</h2>
    <Image src={img} alt="product" />
    <p className={styles.description}>{product.description}</p>
    <p className={styles.price}>{product.price} бер. руб.</p>
     </div>
}