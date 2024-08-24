import React from 'react';

interface BuddyImage {
  src: string;
  alt: string;
}

const buddyImages: BuddyImage[] = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7dfe7f7efeb59e2b89410ff967416b98660984b616fc05557a60d48ce1a2f0c5?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639", alt: "Buddy 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c81d6963cbc3f728f212229a03d8c99430c0786a82bdaa9399135289a6f7f007?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639", alt: "Buddy 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a389274f7a3dc27b70879a05d314ef47abc5f3b9d274e79411a409e988151eb?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639", alt: "Buddy 3" }
];

const MoreBuddies: React.FC = () => {
  return (
    <section className="mt-96 ml-5 w-full  max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between">
        <h2 className="text-6xl text-white max-md:text-4xl">More buddies</h2>
        <div className="flex gap-10 self-start items-center">
          <div className="self-start  text-3xl font-bold text-white">Discover more</div>
          <div className="flex overflow-hidden flex-col items-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/86c8fd78e89c1d36bc5907c36636c542030188b92df74d420a89bd293d046bc5?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639" alt="" className="object-contain w-10 aspect-square" />
          </div>
        </div>
      </div>
      <div className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {buddyImages.map((buddy, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img 
                loading="lazy" 
                src={buddy.src} 
                alt={buddy.alt}
                className="object-contain grow w-full aspect-[1.04] rounded-[49px] max-md:mt-10 max-md:max-w-full" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreBuddies;