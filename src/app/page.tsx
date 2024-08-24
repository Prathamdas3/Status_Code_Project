import Cards from '@/components/Cards'
import Navbar from '@/components/Navbar'
import FormExp from '@/components/form'

export default async function Home() {
  return (
    <main className="container">
      <Navbar />
      <Cards />
      <FormExp/>
    </main>
  )
}
