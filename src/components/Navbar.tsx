import { SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { Cart } from './icons/cartIcon'
import { Searchbar } from './icons/searchIcon'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default async function Navbar() {
  return (
    <section className="bg-white flex justify-between items-center container">
      <div className="py-6 px-12">Name</div>
      <div className="flex py-6 px-12">
        <div className="flex m-auto ">
          <Dialog>
            <DialogTrigger>
              <Searchbar className="mx-6" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Type to Search...</DialogTitle>
                <DialogDescription>Search for items</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </DialogContent>
          </Dialog>

          <div className="flex items-center gap-6">
            {' '}
            <Cart className="" />
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignUpButton />
            </SignedOut>
          </div>
        </div>
      </div>
    </section>
  )
}
