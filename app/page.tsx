import art_ribbon from '@/public/art_ribbon.jpg'
import expand_more from '@/public/expand_more.svg'
import logo from '@/public/logo.png'
import logo_bw from '@/public/logo-bw.png'
import nontech_ticket from '@/public/nontech-ticket.png'
import tech_ticket from '@/public/tech-ticket.png'
import { Josefin_Sans, Libre_Baskerville } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const baskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] })
const josefinSans = Josefin_Sans({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col items-center md:max-w-[60vw]">
      <header className="pt-20 flex flex-col items-center h-[100svh] justify-around">
        {/* Hero Image */}
        <div className="relative aspect-square w-[85vw] max-w-[330px] m-8 grid place-content-center rounded-[32px] bg-gradient-to-br from-cherry/10 to-vinyl/10">
          {/* Title */}
          <h1 style={baskerville.style} className="z-10 text-5xl text-center">
            KRATOS
          </h1>
          <h1 style={josefinSans.style} className="z-10 text-6xl text-center">
            23
          </h1>

          {/* Logo */}
          {/* <Image
            className="opacity-[.25] z-[2] object-contain absolute top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2"
            src={logo_bw}
            alt="Vector art of a lion"
          /> */}

          {/* Blurred Pic BG */}
          <Image
            className="blur-[100px] z-[1] object-contain absolute top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2"
            src={logo}
            alt=""
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
          className="m-12 animate animate-bounce"
        />
      </header>

      <div className="mx-4 rounded-lg overflow-hidden">
        <video className="" src="/promo.mp4" autoPlay muted loop />
      </div>

      {/* Art Ribbon Divider */}
      <div className="mt-12 relative overflow-hidden min-h-[140px] w-full">
        <Image
          className="object-cover md:object-contain"
          src={art_ribbon}
          alt=""
          fill
        />
      </div>

      {/* Events section */}
      <div className="my-12 w-full">
        <h2 className="text-3xl border-b-[1px] border-void-500 pb-[4px] mx-6">
          Events
        </h2>

        {/* Stats grid */}
        <div className="my-10 px-8 flex flex-col md:flex-row">
          {/* Stat row */}
          <div className="flex flex-row mb-8 md:mb-0 md:w-1/2">
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
          <div className="flex flex-row md:w-1/2">
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
        <div className="flex flex-col items-center px-2 md:flex-row flex-wrap">
          <Link
            href="/events/technical"
            className="transition mt-2 md:mt-0 md:px-2 hover:scale-105 scale-100 md:w-1/2"
          >
            <Image
              src={tech_ticket}
              alt="Ticket shape that read non techincal events"
            />
          </Link>
          <Link
            href="/events/nontechnical"
            className="transition mt-8 md:mt-0 md:px-2 hover:scale-105 scale-100 md:w-1/2"
          >
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
