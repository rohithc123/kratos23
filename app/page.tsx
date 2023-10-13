import art_ribbon from '@/public/art_ribbon.jpg'
import expand_more from '@/public/expand_more.svg'
import logo from '@/public/logo.png'
import nontech_ticket from '@/public/non-tech.png'
import tech_ticket from '@/public/tech.png'
import { Josefin_Sans, Libre_Baskerville } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const baskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] })
const josefinSans = Josefin_Sans({ weight: '400', subsets: ['latin'] })

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
      <div className="text-5xl px-4 tracking-tighter text-center font-extrabold text-transparent">
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
        <div className="">November 9</div>
        <div className="text-void-300">@ Easwari Engineering College</div>
      </div>
      <Image
        src={expand_more}
        alt=""
        width={58}
        height={58}
        className="m-8 animate animate-bounce"
      />
      {/* TODO add video over here */}

      {/* Art Ribbon Divider */}
      <Image
        src={art_ribbon}
        height={200}
        width={400}
        alt=""
        className="w-full mt-12"
      />
      {/* Events section */}
      <div className="mt-12 w-full">
        <h2 className="text-3xl border-b-[1px] border-void-500 pb-[4px] mx-6">
          Events
        </h2>

        {/* Stats grid */}
        <div className="my-10 px-8">
          {/* Stat row */}
          <div className="flex flex-row">
            <div className="w-1/2">
              <div className="text-3xl font-semibold">13</div>
              <div className="text-2xl leading-6 text-void-200">events</div>
            </div>
            <div className="w-1/2">
              <div className="text-3xl font-semibold">450+</div>
              <div className="text-2xl leading-6 text-void-200">
                participants
              </div>
            </div>
          </div>

          {/* Stat row */}
          <div className="flex flex-row mt-8">
            <div className="w-1/2">
              <div className="text-3xl font-semibold">15K+</div>
              <div className="text-2xl leading-6 text-void-200">in prizes</div>
            </div>
            <div className="w-1/2">
              <div className="text-3xl font-semibold">32</div>
              <div className="text-2xl leading-6 text-void-200">
                placeholder
              </div>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="flex flex-col items-center px-2">
          <Link href="/events/technical" className="mt-2">
            <Image
              src={tech_ticket}
              alt="Ticket shape that read non techincal events"
            />
          </Link>
          <Link href="/events/nontechnical" className="mt-8">
            <Image
              src={nontech_ticket}
              alt="Ticket shape that read techincal events"
            />
          </Link>
        </div>
      </div>
    </main>
  )
}
