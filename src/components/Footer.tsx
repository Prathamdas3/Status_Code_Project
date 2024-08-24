import ContactForm from './forms/ContactForm'

export default async function Footer() {
  return (
    <section className="flex flex-col py-14 bg-black ">
      <div className="flex flex-col ml-36 max-w-full w-[61.125rem]">
        <div className="flex flex-wrap gap-5 justify-between text-3xl text-white max-md:max-w-full">
          <div className="flex flex-col my-6">
            <h2 className="self-start font-bold text-center text-4xl">ABOUT</h2>
            <p className="mt-9 font-normal text-md ">
              Help The Boucher Legacy come together to protect what's ours.
              Together we can stop poaching and save the rhino from extinction.
              Place our rhino in safe hands.
            </p>
          </div>
        </div>
        <h2 className="self-start font-bold text-center text-white text-4xl">
          CONTACT US
        </h2>
        <ContactForm />
      </div>
    </section>
  )
}
