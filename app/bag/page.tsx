'use client'

import arrow_right from '@/public/arrow_right_dark.svg'
import { Poly, Rubik } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Selected,
  TeamDetail,
  getCookie,
  removeSelectedEvent,
  removeTeamDetails,
} from '../cookies'
import { events } from '../events/eventInfo'
import PersonalDetails from './PersonalDetails'
import SoloEvent from './SoloEvent'
import TeamEvent from './TeamEvent'
import { useRouter } from 'next/navigation'

const poly = Poly({ weight: ['400'], subsets: ['latin'] })
const rubik = Rubik({ weight: ['400'], subsets: ['latin'] })

export default function Bag() {
  // Note: addedEvents is set on first render only, not updated after that
  const [addedEvents, setAddedEvents] = useState<string[]>()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== undefined) {
      const selected = getCookie<Selected>('selected')
      if (selected) {
        setAddedEvents(selected.events)
      }
      setLoading(false)
    }
  }, [])

  function getTotalFee(): number {
    if (!hasAddedEvents()) {
      return 0
    }

    return addedEvents!
      .map<number>((code) => events.get(code)!.fee)
      .reduce((ac, x) => ac + x, 0)
  }

  function hasAddedEvents(): boolean {
    if (!addedEvents) {
      // the cookie isn't even set
      return false
    }
    if (addedEvents.length === 0) {
      // the cookie is set to empty value
      return false
    }
    return true
  }

  function buttonHandler() {
    // disabled
    if (!hasAddedEvents()) {
      return
    }

    // Check if all the team events are entered
    for (let evCode of addedEvents!) {
      const teamDetails = getCookie<TeamDetail>(evCode)
      if (!teamDetails) {
        const element = document.getElementById(evCode)!
        element.scrollIntoView({ block: 'center', behavior: 'smooth' })
        setTimeout(() => {
          element.style.border = '2px solid red'
        }, 100)
        setTimeout(() => {
          element.style.border = ''
        }, 1100)
        return
      }
    }

    // navigate to payment page
    router.push('/pay')
  }

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

      <div className="px-2 grid text-center place-content-center">
        {loading && (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 mt-4 text-gray-200 animate-spin dark:text-void-700 fill-cherry"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}

        {!loading && (!addedEvents || addedEvents?.length == 0) && (
          <p className="pt-4">No events added</p>
        )}
      </div>

      <div className="border-void-500 border-t-[1px] text-2xl p-4 text-right mt-4">
        <h4>
          Total:
          <span className="ml-3 font-medium">₹{getTotalFee()}</span>
        </h4>
      </div>

      {/* nithssh: The whole button isDisabled should've been a state, and useEffect to setIsDisabled and setAddedEvents when cookies change*/}
      <div
        className={`select-none flex w-full text-void-950 fill-void-950 justify-center items-center rounded-full p-3 mt-4 font-semibold ${
          hasAddedEvents()
            ? 'bg-gradient-to-br from-cherry to-vinyl cursor-pointer'
            : 'bg-void-500'
        }`}
        onClick={buttonHandler}
      >
        Go to Payment <Image src={arrow_right} width={20} height={20} alt="" />
      </div>
    </main>
  )
}
