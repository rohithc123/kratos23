'use client';

import { Poly } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './button';

const poly = Poly({
  weight: '400',
  subsets: ['latin'],
});

// TODO make the navbar slidein when scrolling down from top of homepage (hidden on initial load)
// TODO look into the overlay blurring if needed
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [drawerHeight, setDrawerHeight] = useState(0);

  useEffect(() => {
    // ensure this code is running on client, since window is not defined at SSR
    if (typeof window == undefined) {
      return;
    }

    const updateNavHeight = () => {
      const newNavHeight = window.innerHeight;
      setDrawerHeight(newNavHeight);
    };

    window.addEventListener('resize', updateNavHeight);
    updateNavHeight(); // Initial calculation

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('resize', updateNavHeight);
    };
  }, []);

  // opens and closes the nav drawer and overlay
  function navToggleHandler() {
    if (!isActive) {
      // Disable scrolling
      const scrollPosition = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.overflow = 'hidden';

      // remove the overrided display, before transition starts from state update
      document.getElementById('drawer')!.style.display = '';
      document.getElementById('overlay')!.style.display = '';
    } else {
      // Re-enable scrolling
      const topValue = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(topValue || '0', 10) * -1);
      document.body.style.overflow = '';
    }

    // this ensures the display style gets updated before the transition starts
    // avoids browser specific issues related to same-tick updates.
    setTimeout(() => {
      setIsActive((isActive) => !isActive);
    }, 0);
  }

  function transitionEndHandler(e: HTMLElement) {
    // Note: display needs to be set before transition starts for opening
    //

    // remove from layout when close transition is done.
    if (!isActive) {
      e.style.display = 'none';
    }
  }

  return (
    <div
      className="z-20 w-screen flex p-6 text-2xl items-center border-b-[1px] border-void-500 before:backdrop-blur-sm backdrop-blur fixed top-0 bg-void-950/50"
    >
      {/* Navbar */}
      <Link style={poly.style} href="/">
        KRATOS
      </Link>
      <div
        onClick={navToggleHandler}
        className="w-8 h-8 absolute top-6 right-6 cursor-pointer select-none"
      >
        <Image src="/nav-btn.svg" alt="" width={32} height={32} />
      </div>

      {/* Overlay */}
      <div
        id="overlay"
        style={{ display: 'none' }}
        onTransitionEnd={(e) => {
          transitionEndHandler(e.currentTarget);
        }}
        onClick={navToggleHandler}
        className={`transition duration-300 w-screen h-screen fixed top-0 left-0 bg-void-950 backdrop-blur-sm ${
          isActive ? 'opacity-75' : 'opacity-0'
        }`}
      ></div>

      {/* Drawer */}
      <nav
        onTransitionEnd={(e) => {
          transitionEndHandler(e.currentTarget);
        }}
        id="drawer"
        style={{ height: drawerHeight, display: 'none' }}
        className={`transition duration-300 text-white flex flex-col text-xl h-screen bg-black border-l-[1px] border-void-500 w-[80%] fixed top-0 right-0 ${
          isActive ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Home and singup button */}
        <div className="w-full p-8 pb-12 flex place-content-between items-center">
          <div>Home</div>
          <Button
            text="Sign Up"
            inverted={false}
            onClick={() => {
              alert('clicked');
            }}
          />
        </div>

        {/* Top Three options */}
        <div className="px-8 pb-4">Technical</div>
        <div className="px-8 pb-4">Non-Technical</div>
        <div className="px-8 pb-4">&apos;22 Gallery</div>

        {/* Bottom two options */}
        <div className="absolute bottom-0 w-full mb-12">
          <div className="px-8 pb-4">Contact</div>
          <div className="px-8 pb-4">Contributors</div>
          <div className="mx-4 mt-4 h-[1px] bg-gradient-to-r from-cherry to-vinyl cursor-pointer" />
        </div>
      </nav>
    </div>
  );
}
