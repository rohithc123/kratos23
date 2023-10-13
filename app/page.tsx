import expand_more from '@/public/expand_more.svg';
import logo_bw from '@/public/logo-bw.png';
import logo from '@/public/logo.png';
import { Josefin_Sans, Libre_Baskerville } from 'next/font/google';
import Image from 'next/image';
import art_ribbon from '@/public/art_ribbon.svg';
import tech_ticket from "@/public/tech.svg";
import nontech_ticker from "@/public/non-tech.svg"
import Link from 'next/link'


const baskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] });
const josefinSans = Josefin_Sans({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Spacer */}
      <div className="p-10" />

      {/* Hero Image */}
      <div
        style={{ width: `min(calc(100vw - 64px), 400px)` }}
        className="relative aspect-square m-8 grid place-content-center rounded-[32px] bg-gradient-to-br from-cherry/10 to-vinyl/10"
      >
        {/* Title */}
        <div style={baskerville.style} className="z-10 text-5xl text-center">
          KRATOS
        </div>
        <div style={josefinSans.style} className="z-10 text-6xl text-center">
          23
        </div>

        {/* Logo */}
        {/* <Image className='opacity-[.25] z-[2] object-contain absolute top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2' src={logo_bw} alt='logo'/> */}

        {/* Blurred Pic BG */}
        <Image
          className="blur-[100px] z-[1] object-contain absolute top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Hero Text */}
      <div
        className="text-5xl px-4 tracking-tighter text-center font-extrabold text-transparent"
      >
        <span className="bg-clip-text bg-gradient-to-r from-cherry to-vinyl">
          Code.&thinsp;
        </span>
        <span className="bg-clip-text bg-gradient-to-r from-white to-white/50">
          Compete.&thinsp;
        </span>
        <span className="bg-clip-text bg-gradient-to-r from-white to-white/50">
          Conquer.&thinsp;
        </span>
      </div>

      <div className="text-2xl text-center mt-8">
        <div className="">
          November 9
        </div>
        <div className="text-void-300">
          @ Easwari Engineering College
        </div>
      </div>

      <Image src={expand_more} alt="" width={58} height={58} className="m-8 animate animate-bounce" />

        {/* add video over here */}

      <div className=" w-full">
      </div>
      
      <div className="mt-10">
        {/* no need for height aspr locked */}
      <Image src={art_ribbon} alt="github universe image"   className="w-full " />
      </div>

      <div className="mt-10 flex flex-col w-full">
        <div className="m-5">
        <div  className=" text-left text-4xl ">
          Events
        </div>
        {/* <div className=' h-[1px] bg-void-500 w-full '/> */}
        <div  className='h-[1px] w-full bg-void-500'/>
         
         <div  className="mt-10 ml-5 mr-5">
         <div className="flex flex-row ">
          <div className="w-1/2 flex flex-col">
            <div className="text-left text-4xl font-bold">
              13
            </div>
            <div className="text-left text-1xl">
              events
            </div>
           </div>
           <div className="w-1/2 flex flex-col">
            <div className="text-left text-4xl font-bold">
              450+
            </div>
            <div className="text-left text-1xl">
              participants
            </div>
          </div>
         
          </div>
          <div className="flex flex-row mt-10">
          <div className="w-1/2 flex flex-col">
            <div className="text-left text-4xl font-bold">
              15K+
            </div>
            <div className="text-left text-1xl">
              in prizes
            </div>
           </div>
           <div className="w-1/2 flex flex-col">
            <div className="text-left text-4xl font-bold">
              32
            </div>
            <div className="text-left text-1xl">
              sponsors(lol)
            </div>
          </div>
         
          </div>

         </div>
        </div>
        


      </div>

{/* cards */}
      <div className="mt-10  w-full flex flex-col ">
        <div className="m-4">
         
         <Link href="/events/technical">
         <Image src={tech_ticket} alt="github universe image"   className="w-full " />
         </Link>
         
         <Link href="/events/nontechnical">
         <Image src={nontech_ticker} alt="github universe image"   className="w-full mt-8" />

         </Link>

        </div>
      
      </div>
    </main>
  );
}
