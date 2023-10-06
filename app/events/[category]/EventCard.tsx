import arrow_right from '@/public/arrow_right.svg'
import Image from 'next/image'
import Link from 'next/link'
import { EventInfo } from '../eventInfo'

export default function EventCard({
  code,
  ev,
}: {
  code: string
  ev: EventInfo
}) {
  const vs =
    ev.type == 'team' ? `${ev.teamSize}v${ev.teamSize}` : `1v${ev.maxTeams}`
  const subtitle = `${
    ev.type.charAt(0).toUpperCase() + ev.type.slice(1)
  } · ${vs} · ₹${ev.fee}`

  return (
    <Link
      href={`/events/${ev.category}/${code}`}
      key={code}
      className="w-full max-w-sm transition hover:scale-105 text-left rounded-lg border-[1px] border-void-500 py-6 px-4 relative overflow-hidden"
    >
      {/* Top Row */}
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-6">
          <Image src={`/${code}.png`} height={64} width={64} alt="" />
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
        src={`/posters/${code}.png`}
        className="w-full absolute inset-0 -z-[2]"
        fill={true}
        alt=""
      />

      <div className="bg-void-950/75 w-full h-full absolute inset-0 -z-[1]">
        {' '}
      </div>
    </Link>
  )
}
