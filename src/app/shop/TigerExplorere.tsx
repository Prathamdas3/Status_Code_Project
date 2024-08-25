import React from 'react';
import Header from './Header';
import TigerInfo from './TigerInfo';
import TigerImage from './TigerImage';
import MoreBuddies from './MoreBuddies';
import Footer from './Footer';

const TigerExplorer: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col pt-36 bg-black max-md:pt-24">
      <div className="flex flex-col pr-16 pl-4 w-full max-md:pr-5 max-md:max-w-full">
        <div className="self-center w-full max-w-[1180px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <TigerInfo />
            <TigerImage />
          </div>
        </div>
        <MoreBuddies />
      </div>
      <Footer />
    </main>
  );
};

export default TigerExplorer;