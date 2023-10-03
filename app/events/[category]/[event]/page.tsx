import Link from 'next/link'
import { events } from '../../eventInfo'

export default function EventDetailsPage({
  params,
}: {
  params: { event: string }
}) {
  const ev = events.get(params.event)!
  return (
    <div className="min-h-screen flex flex-col">
      {/* Spacer */}
      <div className="p-10" />

      <Link href={`/events/${ev.category}`}>Back to events</Link>
    </div>
  )
}
