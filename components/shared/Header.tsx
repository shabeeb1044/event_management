import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex item-center justify-between my-2 px-4'>

        <Link href='/' className='w-36 my-2 '> 
          <Image src="/assets/images/logo.svg" width={128} height={38} alt='Evently logo' />
        </Link>

        <SignedIn>
          <nav className='md:flex-between hidden md:block w-full max-w-xs my-1'>
            <NavItems />
          </nav>
          <div className='flex w-32 justify-end gap-3 my-1'>
            <UserButton afterSignOutUrl='/' />
            <MobileNav />
          </div>
        </SignedIn>

        <SignedOut>
          <Button asChild className='rounded'  size='lg'>
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  )
}

export default Header
