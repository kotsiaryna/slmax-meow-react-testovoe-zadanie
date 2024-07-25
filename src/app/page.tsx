import Catalog from "./components/catalog/Catalog";
import styles from "./page.module.css";
import { Item } from "./types";


async function getAllProducts(): Promise<Item[]> {
  const res = await fetch('http://localhost:3000/goods', {next: {revalidate: 60}} )
   if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json() 
}

async function Home() {
  const products = await getAllProducts()
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Интернет-магазин крутых товаров</h1>
      <Catalog products={products} />
     </main>
  ); 
}

export default Home