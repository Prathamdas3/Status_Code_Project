'use client'
import { useState } from 'react'
import Web3 from 'web3' // Import Web3
import { Button } from './ui/button'
import contractABI from './CustomNFTABI' // Replace with your ABI file
import Image from 'next/image'
import { Cart } from '@/components/icons/cartIcon'
import { createAnimalCard } from '@/server/action'
import { Animal } from '@prisma/client'

interface NFTCardProps {
  imageSrc: string
  title: string
}

declare global {
  interface Window {
    ethereum?: any // Type definition for MetaMask
  }
}

export default function Cards({ data }: { data: Animal }) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const contractAddress = '0x0fea64f0d310f764de0b4d38f9b33dd057c81683'

  const handleClick = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsLoading(true)
        console.log('Error here')
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' })

        // Create a web3 provider from MetaMask
        const web3 = new Web3(window.ethereum)
        const accounts = await web3.eth.getAccounts()
        const userAddress = accounts[0]
        console.log('Error useraddress')
        // Create a contract instance
        const contract = new web3.eth.Contract(contractABI, contractAddress)

        // Convert Ether to Wei manually
        const valueInWei = web3.utils.toWei('0.01', 'ether') // Converts 0.01 ETH to Wei

        // Mint NFT
        const tx = await contract.methods.mintNFT(userAddress).send({
          from: userAddress,
          value: valueInWei,
        })

        console.log('NFT Minted!', tx)
      } catch (error) {
        console.error('Error minting NFT:', error)
      } finally {
        setIsLoading(false)
      }
    } else {
      console.error('MetaMask is not installed!')
    }
  }

  return (
    <article className="flex flex-col grow rounded-5xl max-md:mt-4 max-md:max-w-full w-72">
      <div className="flex flex-col pt-7 border border-black border-solid bg-stone-700 bg-opacity-0 max-md:max-w-full ">
        <div className="flex justify-center items-center">
          {' '}
          <Image
            loading="lazy"
            src={data.image}
            alt={`NFT ${data.name}`}
            className="object-contain mr-5 ml-5 rounded-3xl aspect-[1.09] max-md:mx-2.5"
            height={200}
            width={200}
          />
        </div>

        <div className="flex flex-col mt-10  bg-opacity-50 max-md:mt-10 max-md:max-w-full">
          <div className="flex px-7 pb-3 gap-4 justify-between text-2xl text-center text-black">
            <h2 className="font-bold">{data.name}</h2>
            <span className="self-start">0.01 eth</span>
          </div>
          <div className="flex z-10 flex-col px-8 py-3 mt-0 w-full bg-blue-200 bg-opacity-80 max-md:max-w-full hover:cursor-pointer hover:bg-sky-100 ">
            <div className="flex self-center max-w-full w-[12rem] items-center">
              <div className="flex overflow-hidden flex-col">
                <Cart />
              </div>

              <Button
                onClick={handleClick}
                disabled={isLoading}
                variant="ghost"
                className="font-semibold text-xl"
              >
                {isLoading ? 'Processing...' : 'Buy Now'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}


export function flexCard(){
  return(
    <>abc</>
  )
}