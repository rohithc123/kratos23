'use client'
import art_ribbon from '@/public/art_ribbon.jpg'
import expand_more from '@/public/expand_more.svg'
import logo_bw from '@/public/logo-bw.png'
import logo from '@/public/logo.png'
import nontech_ticket from '@/public/nontech-ticket.png'
import tech_ticket from '@/public/tech-ticket.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Josefin_Sans, Libre_Baskerville } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const baskerville = Libre_Baskerville({ weight: '700', subsets: ['latin'] })
const josefinSans = Josefin_Sans({ weight: '400', subsets: ['latin'] })

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // const { scrollYProgess } = useScroll(({ scrollYProgress }) => scrollYProgress, {
  //   target: ref,
  // });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '150%'])
  const backgroundX = useTransform(scrollYProgress, [0, 1], ['-150%', '200%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [])

  return (
    <main ref={ref} className="flex flex-col items-center md:max-w-[768px]">
      <header className="pt-20 flex flex-col items-center min-h-[100svh] md:h-fit justify-around">
        {/* Hero Image */}
        <motion.div
          style={{ y: backgroundY }}
          className="-z-10 relative aspect-square w-[85vw] max-w-[330px] md:max-w-[400px] md:m-8 grid place-content-center rounded-[32px] bg-gradient-to-br from-cherry/10 to-vinyl/10 "
        >
          {/* Title */}
          <h1 style={baskerville.style} className="z-10 text-5xl text-center">
            KRATOS
          </h1>
          <h1 style={josefinSans.style} className="z-10 text-6xl text-center">
            23
          </h1>

          {/* Logo */}
          <Image
            className="opacity-10 z-[2] object-contain absolute top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2"
            src={logo_bw}
            alt="Vector art of a lion"
          />

          {/* Blurred Pic BG */}
          <Image
            className="blur-[50px] z-[1] object-contain absolute top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2 opacity-75"
            src={logo}
            alt=""
          />
        </motion.div>

        {/* Hero Text */}
        <div className="bg-black  items-center justify-around flex flex-col">
          <div className="text-5xl px-4 tracking-tighter text-center font-extrabold text-transparent">
            <span className=" bg-clip-text bg-gradient-to-r from-cherry to-vinyl">
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
            <div className="">November 3</div>
            <div className="text-void-300">@ Easwari Engineering College</div>
          </div>
          <Image
            src={expand_more}
            alt=""
            width={58}
            height={58}
            className="m-12 md:mt-24 animate animate-bounce"
          />
        </div>
      </header>

      <div className="w-screen grid justify-items">
        <div className="mx-4 rounded-lg overflow-hidden md:max-w-[80%]  mt-8 justify-self-center">
          <video autoPlay muted loop>
            <source src="/promo.webm" type="video/webm" />
            <source src="/promo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Art Ribbon Divider */}
      <div className="relative overflow-hidden min-h-[140px] w-full my-16 md:mb-8">
        <Image
          className="object-cover md:object-contain"
          src={art_ribbon}
          alt=""
          fill
        />
      </div>

      {/* Events section */}
      <div className="w-full">
        <h2
          className="text-3xl border-b-[1px] border-void-500 pb-[4px] mx-6"
          data-aos="fade-down"
        >
          Events
        </h2>

        {/* Stats grid */}
        <div
          className="my-10 md:my-16 px-8 flex flex-col md:flex-row"
          data-aos="fade-down"
        >
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
          <div className="flex flex-row md:w-1/2" data-aos="fade-down">
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
        <div className="flex flex-col items-center px-2 gap-8 md:gap-16">
          <div data-aos="flip-up">
            <Link
              href="/events/technical"
              className="transition mt-2 md:mt-0 md:px-2 hover:scale-105 scale-100 md:w-1/4"
            >
              <Image
                src={tech_ticket}
                alt="Ticket shape that read non techincal events"
              />
            </Link>
          </div>
          <div data-aos="flip-up">
            <Link
              href="/events/nontechnical"
              className="transition mt-8 md:mt-0 md:px-2 hover:scale-105 scale-100 md:w-3/4"
            >
              <Image
                src={nontech_ticket}
                alt="Ticket shape that read techincal events"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
