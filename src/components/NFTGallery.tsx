import NFTCard from './NFTCard'

const NFTGallery: React.FC = () => {
  const nftData = [
    {
      imageSrc: '/one.png',
      title: 'White Tiger',
      price: '50 eth',
    },
    {
      imageSrc: '/one.png',
      title: 'White Tiger',
      price: '50 eth',
    },
    {
      imageSrc: '/one.png',
      title: 'White Tiger',
    },
    {
      imageSrc: '/one.png',
      title: 'White Tiger',
    },
  ]

  return (
    <main className="flex gap-5 max-md:flex-col">
      {nftData.map((nft, index) => (
        <section
          key={index}
          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
        >
          <NFTCard {...nft} />
        </section>
      ))}
    </main>
  )
}

export default NFTGallery
