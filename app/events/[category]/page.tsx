'use client'

import clear_all from '@/public/clear_all.svg'
import groups from '@/public/groups.svg'
import man from '@/public/man.svg'
import Error from 'next/error'
import { Poly } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { events } from '../eventInfo'
import EventCard from './EventCard'

const poly = Poly({ weight: '400', subsets: ['latin'] })

export default function Events({ params }: { params: { category: string } }) {
  // Get the path details
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'all'

  // restrict to these param values
  if (!['technical', 'nontechnical'].includes(params.category)) {
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
  // Filter for event category
  filteredEvents = filteredEvents.filter(
    ([key, ev]) => ev.category === params.category
  )
  if (['solo', 'team'].includes(type)) {
    // filter for event type
    filteredEvents = filteredEvents.filter(([key, ev]) => ev.type === type)
  }

  // Generate the cards
  let cards = filteredEvents.map(([code, ev], idx) => {
    return <EventCard key={idx} code={code} ev={ev} />
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
      {/* TODO consider using button elements instead */}
      <search className="px-4 pb-4 border-b-[1px] border-void-500  w-full">
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
      </search>

      {/* cards */}
      <div className="w-full py-6 px-4 flex flex-col items-center text-center">
        {cards.length !== 0 ? cards : `No events found`}
      </div>
    </main>
  )
}
