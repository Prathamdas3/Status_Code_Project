const Footer: React.FC = () => {
  return (
    <div className="flex flex-col pt-20 bg-black">
      <main className="flex flex-col ml-36 max-w-full w-[61.125rem]">
        <section className="flex flex-wrap gap-5 justify-between text-3xl text-white max-md:max-w-full">
          <div className="flex flex-col my-6">
            <h2 className="self-start font-bold text-center">ABOUT</h2>
            <p className="mt-9">
              Help The Boucher Legacy come together to protect what's ours.
              Together we can stop poaching and save the rhino from extinction.
              Place our rhino in safe hands.
            </p>
          </div>
          {/* <ContactSection /> */}
        </section>
        <h2 className="self-start font-bold text-center">CONTACT US</h2>
      </main>
    </div>
  )
}

export default Footer
