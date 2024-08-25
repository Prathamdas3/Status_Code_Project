import React from 'react';
import Header from './Header';

const TigerInfo: React.FC = () => {
  return (
    <section className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto font-bold text-white max-md:mt-10 max-md:max-w-full">
        <Header />
        <div className="flex flex-col pl-3.5 mt-11 w-full max-md:mt-10 max-md:max-w-full">
          <p className="text-lg max-md:max-w-full">
            White tigers are rare Bengal tiger variants with striking white fur and blue eyes, found mainly in captivity. Conservation efforts are essential to protect these majestic creatures from extinction.
          </p>
          <div className="flex gap-5 justify-between mt-16 max-w-full text-base text-center w-[369px] max-md:mt-10">
            <button className="px-9 py-4 whitespace-nowrap rounded-3xl bg-zinc-300 bg-opacity-60 max-md:px-5">
              EXPLORE
            </button>
            <button className="px-6 py-4 rounded-3xl bg-zinc-300 bg-opacity-60 max-md:px-5">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TigerInfo;