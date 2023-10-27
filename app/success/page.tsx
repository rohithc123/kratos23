'use client'

import arrow_left from '@/public/arrow_left.svg'
import { Poly } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import {
  Selected,
  getCookie,
  removeSelectedEvent,
  removeTeamDetails,
} from '../cookies'

const poly = Poly({ weight: '400', subsets: ['latin'] })

export default function Success() {
  useEffect(() => {
    // clear the bag after checkout. This page is only reached when
    // user has successfully registered, so clear the bag on this page's load.

    // Note: not clearing the personal details cookie, since user may register for
    // other events after this anyways

    // TODO Maybe consider making another cookie, that stores the added events
    // to a diff cookie, which is then used by the event details page to mark the
    // button as already registered
    if (typeof window !== undefined) {
      const addedEvents = getCookie<Selected>('selected')!.events
      // remove all the team details
      for (let ev of addedEvents) {
        // this function is safe to call on solo events too -- it does nothing.
        removeTeamDetails(ev)
        removeSelectedEvent(ev)
      }
    }
  })

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center gap-6 px-6">
      <h1 style={poly.style} className="text-5xl">
        Registration Successful!
      </h1>
      <p className="text-void-200">
        You will receive email confirmation later from the organizers.
        We&apos;ll see you on campus on 3rd November!
      </p>
      <Link
        href="/"
        className="bg-gradient-to-br from-cherry to-vinyl w-full rounded-full text-void-950 p-3 flex justify-center font-semibold"
      >
        <Image src={arrow_left} width={24} height={24} alt="" />
        Back to home page
      </Link>
    </main>
  )
}
