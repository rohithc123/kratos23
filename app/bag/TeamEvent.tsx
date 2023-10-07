'use client'

import group from '@/public/groups.svg'
import team_edit from '@/public/team_edit.svg'
import tick from '@/public/tick.svg'
import trash from '@/public/trash.svg'
import Image from 'next/image'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { TeamDetail, getCookie, setCookie } from '../cookies'
import { events } from '../events/eventInfo'

export default function TeamEvent({
  eventCode,
  deleteHandler,
}: {
  eventCode: string
  deleteHandler: MouseEventHandler
}) {
  const ev = events.get(eventCode)!
  const [cardStatus, setCardStatus] = useState(Status.unfilled)
  const teamDetail = useRef<TeamDetail>()
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    teamDetail.current = getCookie<TeamDetail>(eventCode)
    if (teamDetail.current) {
      setCardStatus(Status.filled)
    }
  }, [eventCode])

  switch (cardStatus) {
    case Status.unfilled:
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
          <div
            className="p-6 grid place-content-center cursor-pointer"
            onClick={() => {
              setCardStatus(Status.edit)
            }}
          >
            <h4 className="text-xl bg-gradient-to-br from-cherry to-vinyl bg-clip-text text-transparent">
              Enter your team details
            </h4>
          </div>
        </div>
      )
    case Status.edit:
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
            <div className="flex gap-2 relative">
              <h5 className="text-lg">Team Details</h5>
              <Image
                src={tick}
                width={24}
                height={24}
                alt=""
                className="cursor-pointer"
                onClick={() => {
                  const isValid = formRef.current?.reportValidity()
                  if (isValid) {
                    teamDetail.current = {
                      member1: (
                        document.getElementById('member1') as HTMLInputElement
                      ).value,
                      member2: (
                        document.getElementById('member2') as HTMLInputElement
                      ).value,
                      member3: (
                        document.getElementById('member3') as HTMLInputElement
                      ).value,
                    }
                    setCookie<TeamDetail>(eventCode, teamDetail.current)
                    setCardStatus(Status.filled)
                  }
                }}
              />
            </div>

            <form
              className="text-void-300 flex flex-col mt-4 gap-1"
              ref={formRef}
            >
              <div className="flex justify-between">
                <p>Leader</p>
                <input
                  type="text"
                  className="bg-transparent rounded pl-1 w-3/5"
                  value="You"
                  readOnly
                />
              </div>
              {[...Array(ev.teamSize.max - 1).keys()].map((idx) => {
                return (
                  <div key={idx} className="flex justify-between">
                    <p>
                      Member {idx + 1}
                      <span className="text-cherry">
                        {ev.teamSize.min - 1 >= 2 ? '*' : ''}
                      </span>
                    </p>
                    <input
                      autoCapitalize="words"
                      required
                      id={`member${idx + 1}`}
                      type="text"
                      autoComplete="name"
                      minLength={3}
                      className="bg-transparent border-cherry border-[1px] rounded pl-1 placeholder:font-light w-3/5"
                      // placeholder="Bofa Deez"
                      placeholder="Full Name"
                      defaultValue={
                        teamDetail.current &&
                        (teamDetail.current as any)[`member${idx + 1}`]
                      }
                    />
                  </div>
                )
              })}
            </form>
          </div>
        </div>
      )
    case Status.filled:
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
              <Image
                src={team_edit}
                width={24}
                height={24}
                alt=""
                className="cursor-pointer"
                onClick={() => {
                  setCardStatus(Status.edit)
                }}
              />
            </div>

            <div className="flex mt-2">
              <div>
                <p>Leader</p>
                <p>Member 1</p>
                <p>Member 2</p>
                <p>Member 3</p>
              </div>

              <div className="flex-grow text-right text-void-300">
                <p>You</p>
                <p>{teamDetail.current?.member1}</p>
                <p>{teamDetail.current?.member2}</p>
                <p>{teamDetail.current?.member3}</p>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

enum Status {
  unfilled,
  edit,
  filled,
}
