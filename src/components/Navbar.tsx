import { SignInButton, UserButton } from '@clerk/nextjs'

export default async function Navbar() {
  return (
    <section className="">
      <div className="flex items-center justify-around">
        <h2>Home</h2>
        <div className="flex items-center justify-around">
          <UserButton />
          <SignInButton />
        </div>
      </div>
    </section>
  )
}
