'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Inter, Poly } from "next/font/google";
import './navbar.css';
import { useEffect, useState } from 'react';
import Button from './button';

const poly = Poly({
    weight: '400',
    subsets: ['latin'],
});

const inter = Inter({
    subsets: ['latin']
});

export default function Navbar() {
    const [isActive, setIsActive] = useState(false)
    const [drawerHeight, setDrawerHeight] = useState(window.innerHeight)

    useEffect(() => {
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


    return (
        <div style={inter.style} className='z-12 w-screen flex p-6 text-2xl items-center border-b-[1px] border-void-500 before:backdrop-blur-sm fixed top-0 bg-void-950/25'>

            {/* Navbar */}
            <Link style={poly.style} href='/'>KRATOS</Link>
            <div className='w-8 h-8 absolute top-6 right-6 cursor-pointer' onClick={() => { setIsActive(true) }}>
                <Image src='/nav-btn.svg' alt="" width={32} height={32} />
            </div>

            {/* Overlay */}
            <div onClick={() => { setIsActive(false) }} className={`z-13 transition w-screen h-screen absolute inset-0 bg-void-950/50 ${isActive ? 'backdrop-blur-sm' : 'backdrop-blur-none hidden'}`}>
            </div>
            16
            {/* Drawer */}
            <nav style={{ height: drawerHeight }} className={`z-14 text-white text-xl h-screen bg-black border-l-[1px] border-void-500 absolute w-[80%] top-0 ${isActive ? 'drawer-show' : 'drawer-hidden'}`}>
                <div className='w-full h-full flex flex-col'>
                    <div className='w-full p-8 pb-12 flex place-content-between items-center'>
                        <div>Home</div>
                        <Button text='Sign Up' active={true} onClick={() => { alert('clicked') }} />
                    </div>

                    <div className='px-8 pb-4'>Technical</div>
                    <div className='px-8 pb-4'>Non-Technical</div>
                    <div className='px-8 pb-4'>&apos;22 Gallery</div>


                    <div className='absolute bottom-0 w-full mb-12' >
                        <div className='px-8 pb-4'>Contact</div>
                        <div className='px-8 pb-4'>Contributors</div>
                        <div className='mx-4 mt-4 h-[1px] bg-gradient-to-r from-cherry to-vinyl cursor-pointer' />

                    </div>

                </div>
            </nav>
        </div >
    )
}

const style = {

}