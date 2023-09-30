import { Inter, Josefin_Sans, Libre_Baskerville } from 'next/font/google';
import Image from 'next/image';
import logo_bw from '@/public/logo-bw.png';
import logo from '@/public/logo.png';
import expand_more from '@/public/expand_more.svg';

const baskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] });
const josefinSans = Josefin_Sans({ weight: '400', subsets: ['latin'] });
const inter_bold = Inter({ weight: '800', subsets: ['latin'] });
const inter_reg = Inter({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="p-9"></div>

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
        style={inter_bold.style}
        className="text-5xl px-4 tracking-tighter text-center text-transparent"
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
        <div style={inter_reg.style} className="">
          November 9
        </div>
        <div style={inter_reg.style} className="text-void-300">
          @ Easwari Engineering College
        </div>
      </div>

      <Image src={expand_more} alt="" width={58} height={58} className="m-8" />

      <div className="p-9"></div>
      <div className="p-9"></div>
      <div className="p-9"></div>
      <div className="p-9"></div>

    </main>
  );
}
