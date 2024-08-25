import Cards from '@/components/Cards'
import Navbar from '@/components/Navbar'

import FormExp from '@/components/form'

import Hero from '@/components/Hero'
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import NFTGallery from '@/components/NFTGallery'

export default async function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <section className='container my-4'>
      <NFTGallery />
      <Cards />

      <FormExp/>

      <Details />
      </section>
      <Footer />

    </main>
  )
}
