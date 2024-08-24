
import Cards from '@/components/Cards'
import Navbar from '@/components/Navbar'
import Midpage from '@/components/Midpage'
import Bottompage from '@/components/Bottompage'
import MyComponent from '@/components/trial/MyComponent'
import NFTGallery from '@/components/trial/NFTGallery'

export default async function Home() {
  return (
    <main className="container">
      <Navbar />
      <Midpage/>
      <NFTGallery/>
      <Cards />
      <Bottompage/>
      <MyComponent/>
    </main>
  )

}
