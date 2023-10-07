import arrow_back from '@/public/arrow_back.svg'
import { Poly, Rubik } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { events } from '../../eventInfo'
import AddToBagButton from './addButton'

const poly = Poly({ subsets: ['latin'], weight: '400' })
const rubik = Rubik({ subsets: ['latin'] })

export async function generateStaticParams() {
  var result = []
  for (var c of ['technical', 'nontechnical']) {
    const filteredEvents = Array.from(events)
      .filter(([k, v]) => v.category === c)
      .map(([k, v]) => k)
    for (var e of filteredEvents) {
      result.push({ category: c, event: e })
    }
  }
  return result
}

export default function EventDetailsPage({
  params,
}: {
  params: { event: string }
}) {
  const ev = events.get(params.event)!

  const vs =
    ev.type == 'team' ? `${ev.teamSize.max}v${ev.teamSize.max}` : `1v${ev.maxTeams}`
  const subtitle = `${
    ev.type.charAt(0).toUpperCase() + ev.type.slice(1)
  } · ${vs} · ₹${ev.fee}`

  return (
    <main className="min-h-screen w-screen flex flex-col">
      {/* Spacer */}
      <div className="p-10" />

      {/* Back Button */}
      <Link
        href={`/events/${ev.category}`}
        className="flex my-6 ml-2 gap-1 text-xl text-cherry"
      >
        <Image src={arrow_back} width={24} height={24} alt="" /> Back to events
      </Link>

      {/* Poster */}
      <Image
        className="w-screen aspect-video"
        src={`/posters/${params.event}.png`}
        alt=""
        width={1920}
        height={1080}
      />

      {/* Header */}
      {/* TODO make header sticky */}
      <header className="flex sticky w-full p-4 justify-between items-center font-medium">
        <div>
          <h1 style={poly.style} className="text-5xl">
            {ev.name}
          </h1>
          {/* TODO plug the slot info */}
          <div className="mt-1">{subtitle}</div>
          <div>{ev.maxTeams} slots available</div>
        </div>

        <AddToBagButton eventCode={params.event} />
      </header>

      <div className="px-4">
        <p className="text-void-200">{ev.description}</p>

        <h2
          style={rubik.style}
          className="border-b-[1px] border-void-500 text-3xl pb-2 pt-4"
        >
          Prizes
        </h2>
        <p className="p-3 bg-void-700 mt-4 rounded-lg border-[1px] border-void-500 font-light">
          🏆 {ev.prizes[0]} <br />
          🥈 {ev.prizes[1]} <br />
          🥉 {ev.prizes[2]}
        </p>

        <h2
          style={rubik.style}
          className="border-b-[1px] border-void-500 text-3xl pb-2 pt-4"
        >
          Rules
        </h2>
        <ol className="list-decimal list-outside p-3 pl-8 bg-void-700 mt-4 rounded-lg border-[1px] border-void-500 font-light">
          {ev.rules.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ol>

        <h2
          style={rubik.style}
          className="border-b-[1px] border-void-500 text-3xl pb-2 pt-4"
        >
          Organizers
        </h2>
        <ul className="mt-4">
          {/* TODO Click to copy */}
          {ev.organizers.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
