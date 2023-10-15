'use client'

import nav_btn from '@/public/nav-btn.svg'
import { Poly } from 'next/font/google'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCookie } from './cookies'
import bag from '@/public/shopping_bag.svg'

const poly = Poly({
  weight: '400',
  subsets: ['latin'],
})

// TODO look into the overlay blurring if needed
export default function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const [drawerHeight, setDrawerHeight] = useState(0)
  const [addedEvents, setAddedEvents] = useState<string[]>()
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window == undefined) {
      return
    }

    const updateNavHeight = () => {
      const newNavHeight = window.innerHeight
      setDrawerHeight(newNavHeight)
    }

    document.getElementById('overlay')!.classList.add('hidden')
    document.getElementById('drawer')!.classList.add('hidden')

    window.addEventListener('resize', updateNavHeight)
    updateNavHeight() // Initial calculation

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('resize', updateNavHeight)
    }
  }, [])

  useEffect(() => {
    setIsActive(false)
  }, [pathname])

  // opens and closes the nav drawer and overlay
  useEffect(() => {
    if (typeof window == undefined) {
      return
    }

    if (isActive) {
      // Disable scrolling
      const scrollPosition = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPosition}px`
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable scrolling
      const topValue = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(topValue || '0', 10) * -1)
      document.body.style.overflow = ''
    }
  }, [isActive])

  function transitionEndHandler(e: HTMLElement) {
    // Note: display needs to be set before transition starts for opening
    //

    // remove from layout when close transition is done.
    if (!isActive) {
      e.classList.add('hidden')
    }
  }

  return (
    <div className="z-20 w-screen flex p-6 md:py-3 text-2xl items-center border-b-[1px] border-void-500  backdrop-blur fixed top-0 bg-void-950/50 md:justify-between">
      {/* Navbar */}
      <Link style={poly.style} href="/">
        KRATOS
      </Link>

      <Image
        onClick={() => {
          // remove the overrided display, before transition starts from state update
          document.getElementById('overlay')!.classList.remove('hidden')
          document.getElementById('drawer')!.classList.remove('hidden')

          setTimeout(() => {
            setIsActive(true)
          }, 0)
        }}
        className="w-8 h-8 absolute top-6 right-6 cursor-pointer select-none md:hidden"
        src={nav_btn}
        alt=""
        width={32}
        height={32}
      />

      {/* Overlay */}
      <div
        id="overlay"
        onTransitionEnd={(e) => {
          transitionEndHandler(e.currentTarget)
        }}
        onClick={() => {
          setIsActive(false)
        }}
        className={`transition duration-300 w-screen h-screen fixed top-0 left-0 bg-void-950 backdrop-blur-sm ${
          isActive ? 'opacity-75' : 'opacity-0'
        }`}
      ></div>

      {/* Drawer */}
      {/* Consider moving this whole thing to server comp and pass as child */}
      <nav
        onTransitionEnd={(e) => {
          transitionEndHandler(e.currentTarget)
        }}
        id="drawer"
        style={{ height: drawerHeight }}
        className={`transition duration-300 text-white flex flex-col text-xl h-screen bg-black border-l-[1px] border-void-500 w-[80%] fixed top-0 right-0 ${
          isActive ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Home and singup button */}
        <div className="w-full p-8 pb-12 flex place-content-between items-center">
          <Link href="/" onClick={() => setIsActive(false)}>
            Home
          </Link>

          {/* Signup button */}
          <div
            onClick={() => {
              alert('clicked')
            }}
            className={`min-w-[10ch] p-[1px] w-fit text-base  rounded-full font-semibold bg-gradient-to-br from-cherry to-vinyl cursor-pointer`}
          >
            <div
              // TODO plug the inversion
              className={`p-3 text-center rounded-full select-none 'bg-transparent text-void-950`}
            >
              Sign Up
            </div>
          </div>
        </div>

        {/* Top Three options */}
        <Link
          href="/events/technical"
          onClick={() => {
            setIsActive(false)
          }}
          className="mx-8 mb-4"
        >
          Technical
        </Link>
        <Link
          href="/events/nontechnical"
          onClick={() => {
            setIsActive(false)
          }}
          className="mx-8 mb-4"
        >
          Non-Technical
        </Link>
        <Link
          href="/gallery"
          onClick={() => {
            setIsActive(false)
          }}
          className="mx-8 mb-4"
        >
          &apos;22 Gallery
        </Link>

        {/* Bottom two options */}
        <div className="absolute bottom-0 w-full mb-12">
          <div className="mx-8 mb-4">Contact</div>
          <div className="mx-8 mb-4">Contributors</div>
          <div className="mx-4 mt-4 h-[1px] bg-gradient-to-r from-cherry to-vinyl cursor-pointer" />
        </div>
      </nav>

      {/* Desktop-only Nav Segmented Button */}
      <nav className="h-full hidden md:flex font-medium text-base w-[600px] justify-around py-3 bg-void-700 rounded-full">
        <Link href="/events/technical" className="">
          Technical
        </Link>
        <Link href="/events/nontechnical">Non-Technical</Link>
        <Link href="/contributors">Contributors</Link>
      </nav>

      {/* Bag Button */}
      <Link
        href="/bag"
        className=" hidden md:flex md:justify-end mr-4 relative cursor-pointer"
      >
        <Image
          className="w-8 h-8 select-none "
          src={bag}
          alt=""
          width={32}
          height={32}
        />
        {/* TODO the bag size badge */}
        {/* Note: the problem is updating the badge when the cookie changes, so 
        it is better to not have the number currently than to have a desynced number */}
        {/* <div className="flex justify-center bg-white text-black rounded-full text-center absolute h-5 w-5 translate-x-4 -translate-y-4 text-sm self-center">
          <p className="self-center text-center">
            1
          </p>
        </div> */}
      </Link>
    </div>
  )
}
