'use client'
import { useState } from 'react';
import Web3 from 'web3'; // Import Web3
import { Button } from './ui/button';
import contractABI from './CustomNFTABI'; // Replace with your ABI file

declare global {
  interface Window {
    ethereum?: any; // Type definition for MetaMask
  }
}

export default function Cards() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contractAddress = '0xb7fa0124e30b8b28855aeb5abb7b75e9a8a841e1';

  const handleClick = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsLoading(true);

        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create a web3 provider from MetaMask
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        // Create a contract instance
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Convert Ether to Wei manually
        const valueInWei = web3.utils.toWei('0.01', 'ether'); // Converts 0.01 ETH to Wei

        // Mint NFT
        const tx = await contract.methods.mintNFT(userAddress).send({
          from: userAddress,
          value: valueInWei,
        });

        // Wait for the transaction to be mined
        console.log('NFT Minted!');
      } catch (error) {
        console.error('Error minting NFT:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error('MetaMask is not installed!');
    }
  };

  return (
    <section>
      <Button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Buy Now'}
      </Button>
    </section>
  );
}
