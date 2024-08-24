import Cards from '@/components/Cards'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import NFTGallery from '@/components/NFTGallery'

export default async function Home() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      <NFTGallery />
      <Cards />
      <Details />
      <Footer />
    </main>
  )
}
