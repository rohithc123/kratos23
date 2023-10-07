'use client'

import group from '@/public/groups.svg'
import team_edit from '@/public/team_edit.svg'
import trash from '@/public/trash.svg'
import Image from 'next/image'
import { events } from '../events/eventInfo'
import { Selected, getCookie, setCookie } from '../cookies'
import { MouseEventHandler } from 'react'

export default function TeamEvent({
  eventCode,
  deleteHandler,
}: {
  eventCode: string
  deleteHandler: MouseEventHandler
}) {
  const ev = events.get(eventCode)!
  return (
    <div className="rounded-lg overflow-hidden border-[1px] border-void-500 bg-void-700 mt-4">
      {/* Header */}
      <div className="flex gap-3 w-full px-4 py-6 items-center border-b-[1px] border-void-500">
        {/* Icon Round */}
        <div className="grid place-content-center h-14 w-14 bg-void-500 border-[1px] border-void-300 rounded-full">
          <Image
            src={`/icons/${eventCode}.png`}
            width={32}
            height={32}
            alt=""
          />
        </div>

        {/* Title */}
        <div className="flex-grow">
          <h4 className="text-2xl truncate">{ev.name}</h4>
          <div className="flex gap-1">
            <Image src={group} width={24} height={24} alt="" />
            Team
          </div>
        </div>

        {/* Price */}
        <div className="text-2xl">₹{ev.fee}</div>

        {/* Delete Button */}
        <Image
          src={trash}
          width={28}
          height={28}
          alt=""
          className="cursor-pointer"
          onClick={deleteHandler}
        />
      </div>

      {/* Details */}
      <div className="p-4">
        {/* Title */}
        <div className="flex gap-2">
          <h5 className="text-lg">Team Details</h5>
          <Image src={team_edit} width={24} height={24} alt="" />
        </div>

        <div className="flex mt-2">
          <div>
            Leader <br />
            Member 1 <br />
            Member 2 <br />
            Member 3
          </div>

          <div className="flex-grow text-right text-void-300">
            You <br />
            Joe Mama <br />
            Bofa Deez <br />
            Stu Sugondeez <br />
          </div>
        </div>
      </div>
    </div>
  )
}
