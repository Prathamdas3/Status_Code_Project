import Navbar from '@/components/Navbar'
import FormExp from '@/components/form'
import Hero from '@/components/Hero'
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import NFTGallery from '@/components/NFTGallery'
import { getAnimals } from '@/server/action'

export default async function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <section className="container my-4">
        <NFTGallery />
        <Details />
      </section>
      <section className="flex justify-center bg-black">
        <Footer />
      </section>
    </main>
  )
}
