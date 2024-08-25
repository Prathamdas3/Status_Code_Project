import React from 'react';

const TigerImage: React.FC = () => {
  return (
    <section className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow font-bold text-center text-white text-opacity-30 max-md:mt-10 max-md:max-w-full">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec4142c2546d2e828519d8cde3925c45302d53ba04611bc64f57369d13336c69?placeholderIfAbsent=true&apiKey=29eeabe0f372480f9776892916907639" 
          alt="White tiger" 
          className="object-contain self-end max-w-full aspect-square rounded-[49px] w-[28rem]" 
        />
        <div className="flex flex-col items-start py-8 pr-10 pl-8 max-w-full bg-neutral-700 rounded-[29px] w-[22rem] max-md:px-5 absolute mt-[22rem] ml-[3rem] hover:cursor-pointer hover:bg-neutral-800">
          <div className="flex gap-24 text-3xl text-white text-opacity-50">
            <div className="flex shrink-0 bg-yellow-400 h-[42px] w-[57px]" />
            <div className="self-start mt-2 basis-auto font-sans">50 ETH</div>
          </div>
          <div className="mt-5 ml-[0.1rem] text-lg">ends in</div>
          <div className="mt-2 text-base max-md:ml-2.5">2:03 min</div>
        </div>
      </div>
    </section>
  );
};

export default TigerImage;