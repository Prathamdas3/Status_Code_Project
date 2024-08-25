import { getAnimals } from '@/server/action'
import Card from './Cards'

export default async function () {
  const data = await getAnimals()

  return (
    <main className="flex gap-5 max-md:flex-col">
      {data?.map((nft, index) => (
        <section
          key={index}
          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
        >
          <Card data={nft} />
        </section>
      ))}
    </main>
  )
}
