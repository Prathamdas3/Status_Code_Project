import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection"
import SocialIcons from "./SocialIcons";
import Footer from "./Footer";

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col pt-20 bg-black">
      <main className="flex flex-col ml-36 max-w-full w-[61.125rem]">
        <section className="flex flex-wrap gap-5 justify-between text-3xl text-white max-md:max-w-full">
          <AboutSection />
          <ContactSection />
        </section>
        <SocialIcons />
      </main>
      <Footer />
    </div>
  );
};

export default MyComponent;