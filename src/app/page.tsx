import Cards from '@/components/Cards'
import Navbar from '@/components/Navbar'

export default async function Home() {
  return (
    <main className="container">
      <Navbar />
      <Cards />
    </main>
  )
}
