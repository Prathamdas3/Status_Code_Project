import React from 'react';
import NFTCard from './NFTCard';

const NFTGallery: React.FC = () => {
  const nftData = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa22885cbd83dbf78ae90e45cb0a52dbcc86fcec58d4ac71e3e1c12a5ec5f36d?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639", title: "White Tiger", price: "50 eth", buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/071bff223eb55c13cbbf116862e2e9be3f18bb73211dd0541aa77aed14d2979c?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa22885cbd83dbf78ae90e45cb0a52dbcc86fcec58d4ac71e3e1c12a5ec5f36d?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639", title: "White Tiger", price: "50 eth", buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/071bff223eb55c13cbbf116862e2e9be3f18bb73211dd0541aa77aed14d2979c?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa22885cbd83dbf78ae90e45cb0a52dbcc86fcec58d4ac71e3e1c12a5ec5f36d?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639", title: "White Tiger", price: "50 eth", buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/071bff223eb55c13cbbf116862e2e9be3f18bb73211dd0541aa77aed14d2979c?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa22885cbd83dbf78ae90e45cb0a52dbcc86fcec58d4ac71e3e1c12a5ec5f36d?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639", title: "White Tiger", price: "50 eth", buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/789c6e62e3bdab3f8031c13c00ba35e10b0e52a7143872efbf712bc2f7e00b70?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639" }
  ];

  return (
    <main className="flex gap-5 max-md:flex-col">
      {nftData.map((nft, index) => (
        <section key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <NFTCard {...nft} />
        </section>
      ))}
    </main>
  );
};

export default NFTGallery;