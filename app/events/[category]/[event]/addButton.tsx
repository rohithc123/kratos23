'use client'
import {
  eventIsSelected,
  idempotentAddSelectedEvent,
  removeSelectedEvent,
} from '@/app/cookies'
import add from '@/public/add.svg'
import tick from '@/public/tick.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function AddToBagButton({ eventCode }: { eventCode: string }) {
  const [inverted, setInverted] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      if (eventIsSelected(eventCode)) {
        setInverted(true)
      }
    }
  }, [eventCode])

  return (
    <div
      onClick={() => {
        if (inverted) {
          removeSelectedEvent(eventCode)
        } else {
          idempotentAddSelectedEvent(eventCode)
        }
        setInverted(!inverted)
      }}
      className={`transition-all min-w-[10ch] h-fit p-[1px] w-fit text-base  rounded-full font-medium bg-gradient-to-br from-cherry to-vinyl cursor-pointer`}
    >
      <div
        className={`p-3 flex text-center rounded-full select-none gap-1 ${
          inverted ? 'bg-void-950 text-white' : 'bg-transparent text-void-950'
        }`}
      >
        {inverted ? 'Added' : 'Add to Bag'}
        <Image src={inverted ? tick : add} alt="" height={16} width={16} />
      </div>
    </div>
  )
}
