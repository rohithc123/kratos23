'use client'

import arrow_right from '@/public/arrow_right.svg'
import clear_all from '@/public/clear_all.svg'
import groups from '@/public/groups.svg'
import man from '@/public/man.svg'
import Error from 'next/error'
import { Poly } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { events } from '../eventInfo'

const poly = Poly({ weight: '400', subsets: ['latin'] })

export async function generateStatisParams() {
  return [{ category: 'technical' }, { category: 'nontechnical' }]
}

export default function Events({ params }: { params: { category: string } }) {
  // Get the path details
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'all'

  // restrict to these param values
  if (!(params.category in ['techincal', 'nontechnical'])) {
    return <Error statusCode={404} />
  }

  const categoryTitle =
    params.category === 'technical' ? 'Technical' : 'Non-Technical'
  const quote =
    categoryTitle === 'Technical'
      ? "“Thinking doesn't guarantee that we won't make mistakes. But not thinking guarantees that we will.” — Leslie Lamport"
      : '“Creativity is intelligence having fun.” — Albert Einstein'

  // Filter events to selected event type
  let filteredEvents = Array.from(events)
  if (type in ['solo', 'team']) {
    filteredEvents = filteredEvents.filter(([key, ev]) => ev.type === type)
  }

  // Generate the cards
  let cards = filteredEvents.map(([key, ev]) => {
    const vs =
      ev.type == 'team' ? `${ev.teamSize}v${ev.teamSize}` : `1v${ev.maxTeams}`
    const subtitle = `${
      ev.type.charAt(0).toUpperCase() + ev.type.slice(1)
    } · ${vs} · ₹${ev.fee}`

    return (
      <Link
        href={`/events/${params.category}/${key}`}
        key={key}
        className="w-full text-left rounded-lg border-[1px] border-void-500 bg-void-950/75 py-6 px-4 relative overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-6">
            <Image src={`/${key}.png`} height={64} width={64} alt="" />
            <div>
              <h4 className="text-3xl">{ev.name}</h4>
              <div>{subtitle}</div>
            </div>
          </div>

          <Image src={arrow_right} width={32} height={32} alt="" />
        </div>

        {/* Bottom Row */}
        <p className="mt-5 font-light line-clamp-3">{ev.description}</p>

        {/* BG Poster */}
        <Image
          src={`/posters/${key}.png`}
          width={350}
          height={200}
          className="w-full absolute inset-0 -z-10"
          alt=""
        />
      </Link>
    )
  })

  return (
    <main className="min-h-screen w-screen flex flex-col items-center">
      {/* Spacer */}
      <div className="p-10" />

      {/* Header */}
      <header className="w-full mt-12 px-2 text-center">
        <h1 style={poly.style} className="text-5xl mb-2">
          {categoryTitle} Events
        </h1>
        <p className="text-base text-void-300 leading-5 px-2 italic mb-6">
          {quote}
        </p>
      </header>

      {/* Filter */}
      <div className="px-4 pb-4 border-b-[1px] border-void-500  w-full">
        <div className="w-full grid border-[1px] border-inherit grid-cols-3 divide-x h-12 divide-void-500 rounded-full overflow-hidden font-medium">
          <Link
            href="?"
            className={`flex justify-center items-center ${
              type === 'all' ? 'bg-void-700' : 'bg-void-950'
            }`}
          >
            <Image src={clear_all} alt="" />
            All
          </Link>
          <Link
            href="?type=solo"
            className={`flex justify-center items-center ${
              type === 'solo' ? 'bg-void-700' : 'bg-void-950'
            }`}
          >
            <Image src={man} alt="" />
            Solo
          </Link>
          <Link
            href="?type=team"
            className={`flex justify-center items-center ${
              type === 'team' ? 'bg-void-700' : 'bg-void-950'
            }`}
          >
            <Image src={groups} alt="" className="mr-1" />
            Team
          </Link>
        </div>
      </div>

      {/* cards */}
      <div className="w-full py-6 px-4 flex flex-col items-center text-center">
        {cards.length !== 0 ? cards : `No events found`}
      </div>
    </main>
  )
}
