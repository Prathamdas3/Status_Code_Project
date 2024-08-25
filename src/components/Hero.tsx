'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { getAuth } from '@clerk/nextjs/server'
import Image from 'next/image'

const arr = [
  '/download.jpeg',
  '/download.jpeg',
  '/download.jpeg',
  '/download.jpeg',
  '/download.jpeg',
  '/download.jpeg',
  '/download.jpeg',
  '/download.jpeg',
  '/download.jpeg',
  '/download.jpeg',
  '/download.jpeg',
  '/download.jpeg',
  '/download.jpeg',
]

export default function Hero() {
  const router = useRouter()
  // const user = getAuth()
  return (
    <section className="bg-white py-[80px]">
      <section className="flex overflow-x-scroll space-x-5 p-5 scrollbar-hide">
        {arr.map((e: string, index: number) => (
          <Image
            key={index}
            className="h-56 w-64 rounded-[2.4rem] flex-shrink-0"
            src={e}
            alt={`Image ${index + 1}`}
            width={200}
            height={200}
          />
        ))}
      </section>

      <div className="flex flex-col justify-center center">
        <p className="text-black  font-bold text-[1.5rem] text-center py-[5rem] px-[15rem]">
          Our country continues to struggle daily against rhino poaching as well
          as the poaching of other endangered mammals. The Boucher Legacy helps
          rhinos and other threatened mammals, such as the African Wild Dog and
          Pangolin.
        </p>
        <div className="flex justify-center">
          <Button
            className="w-[26rem] h-[6rem] rounded-[3rem] bg-[#34C1EE] text-[1.9rem] font-bold text-black  hover:border-[#34C1EE]"
            variant="outline"
            onClick={() => router.push('/sanctuary/animal')}
          >
            Register your Animal
          </Button>
        </div>
      </div>
    </section>
  )
}
