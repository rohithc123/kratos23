'use client'

import { Poly, Rubik } from 'next/font/google'
import { useEffect, useState } from 'react'
import { Selected, getCookie, removeSelectedEvent, removeTeamDetails, setCookie } from '../cookies'
import { events } from '../events/eventInfo'
import PersonalDetails from './PersonalDetails'
import SoloEvent from './SoloEvent'
import TeamEvent from './TeamEvent'

const poly = Poly({ weight: ['400'], subsets: ['latin'] })
const rubik = Rubik({ weight: ['400'], subsets: ['latin'] })

export default function Bag() {
  const [addedEvents, setAddedEvents] = useState<string[]>()

  useEffect(() => {
    if (typeof window !== undefined) {
      const selected = getCookie<Selected>('selected')
      if (selected) {
        setAddedEvents(selected.events)
      }
    }
  }, [])

  return (
    <main className="min-h-screen px-4">
      {/* Spacer */}
      <div className="p-10" />

      {/* Header */}
      <header className="w-full mt-12 ">
        <h1 style={poly.style} className="text-5xl">
          Your Bag
        </h1>
        <p className="text-base text-void-300 leading-5 mt-2">
          Enter your details below to complete the registration process
        </p>
      </header>

      <PersonalDetails />

      <h2
        style={rubik.style}
        className="border-b-[1px] border-void-500 text-3xl mt-6 pb-2"
      >
        Added Events
      </h2>
      {/* <SoloEvent eventCode='futsal' />*/}

      {addedEvents?.map((event, idx) => {
        if (events.get(event)?.type == 'team') {
          return (
            <TeamEvent
              key={idx}
              eventCode={event}
              deleteHandler={() => {
                removeSelectedEvent(event)
                removeTeamDetails(event)
                setAddedEvents(addedEvents.filter((ev) => ev !== event))
              }}
            />
          )
        } else {
          return (
            <SoloEvent
              key={idx}
              eventCode={event}
              deleteHandler={() => {
                removeSelectedEvent(event)
                setAddedEvents(addedEvents.filter((ev) => ev !== event))
              }}
            />
          )
        }
      })}

      <p className="p-2 text-center">
        {!addedEvents || addedEvents?.length == 0 ? 'No events added' : ''}
      </p>
    </main>
  )
}
