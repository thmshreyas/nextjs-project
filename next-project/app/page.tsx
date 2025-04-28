import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
   <main>
    <Link href='/users'>Users</Link>
    <h1>Hello wolrd</h1>
    <ProductCard />
    </main>
  )
}
