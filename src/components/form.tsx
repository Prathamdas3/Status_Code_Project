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
  const [status, setStatus] = useState<string | null>(null);

  const contractAddress = '0x4071d096d36641783f6c754bb0784b9c6ab86c22'; // Replace with your deployed contract address

  const handleClick = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsLoading(true);
        setStatus(null);

        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create a web3 provider from MetaMask
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        // Create a contract instance
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Set parameters for the initialize function
        const name = "test";
        const symbol = "MNFT";
        const baseURI = "https://example.com/metadata/";
        const maxSupply = 1;

        // Initialize contract
        const tx = await contract.methods.initialize(name, symbol, baseURI, maxSupply).send({
          from: userAddress,
        });

        // Wait for the transaction to be mined
        console.log('Contract Initialized:', tx);
        setStatus('Contract initialized successfully!');
      } catch (error) {
        console.error('Error initializing contract:', error);
        setStatus('Error initializing contract. Check the console for details.');
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error('MetaMask is not installed!');
      setStatus('MetaMask is not installed!');
    }
  };

  return (
    <section>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Initialize Contract'}

        </Button>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
}
