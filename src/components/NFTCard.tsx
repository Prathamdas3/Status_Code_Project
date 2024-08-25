import Image from 'next/image'
import { Cart } from '@/components/icons/cartIcon'

interface NFTCardProps {
  imageSrc: string
  title: string
}

const NFTCard = ({ imageSrc, title }: NFTCardProps) => {
  return (
    <article className="flex flex-col grow rounded-lg max-md:mt-4 max-md:max-w-full ">
      <div className="flex flex-col pt-7 border border-black border-solid bg-stone-700 bg-opacity-0 max-md:max-w-full ">
        <div className="flex justify-center items-center">
          {' '}
          <Image
            loading="lazy"
            src={imageSrc}
            alt={`NFT ${title}`}
            className="object-contain mr-5 ml-5 rounded-3xl aspect-[1.09] max-md:mx-2.5"
            height={200}
            width={200}
          />
        </div>

        <div className="flex flex-col mt-10  bg-opacity-50 max-md:mt-10 max-md:max-w-full">
          <div className="flex px-7 pb-3 gap-4 justify-between text-2xl text-center text-black">
            <h2 className="font-bold">{title}</h2>
            <span className="self-start">50 eth</span>
          </div>
          <div className="flex z-10 flex-col px-8 py-3 mt-0 w-full bg-blue-200 bg-opacity-80 max-md:max-w-full hover:cursor-pointer hover:bg-sky-100 ">
            <div className="flex self-center max-w-full w-[12rem]">
              <div className="flex overflow-hidden flex-col">
                <Cart />
              </div>
              <button className="grow shrink text-2xl font-bold text-center text-stone-900 w-[145px]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default NFTCard
