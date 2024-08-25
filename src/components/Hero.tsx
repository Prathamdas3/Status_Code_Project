'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { getAuth } from '@clerk/nextjs/server'
import Image from 'next/image'

export default function Hero() {
  const router = useRouter()
  // const user = getAuth()
  return (
    <section className="pt-[50px] pb-[80px] heroBack min-h-[92vh] flex flex-row justify-center items-center bg-sky-200 pb-4">
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
      <div className='mr-32'><Image src="/background.jpg" height={1700} width={1700} alt='bg' className=' rounded-xl' /></div>
    </section>
  )
}
