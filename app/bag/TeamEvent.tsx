'use client'

import group from '@/public/groups.svg'
import save from '@/public/save.svg'
import team_edit from '@/public/team_edit.svg'
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

  function getFilledEventFee(): number {
    if (ev.fee.type == 'flat') {
      return ev.fee.amount
    } else {
      let _teamSize = 1
      _teamSize += teamDetail.current?.member1 ? 1 : 0
      _teamSize += teamDetail.current?.member2 ? 1 : 0
      _teamSize += teamDetail.current?.member3 ? 1 : 0
      _teamSize += teamDetail.current?.member4 ? 1 : 0
      return _teamSize * ev.fee.amount
    }
  }

  switch (cardStatus) {
    case Status.unfilled:
      return (
        <div
          id={eventCode}
          className="transition rounded-lg overflow-hidden border-[1px] border-void-500 bg-void-700 mt-4"
        >
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
              <h4 className="text-2xl truncate w-[12ch] md:w-[22ch]">
                {ev.name}
              </h4>
              <div className="flex gap-1">
                <Image src={group} width={24} height={24} alt="" />
                Team
              </div>
            </div>

            {/* Price */}
            <div className="text-2xl">
              ₹
              {`${
                ev.fee.type == 'flat'
                  ? ev.fee.amount
                  : `${ev.fee.amount * ev.teamSize.min}-${
                      ev.fee.amount * ev.teamSize.max
                    }`
              }`}
            </div>

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
        <div
          id={eventCode}
          className="transition rounded-lg overflow-hidden mt-4 bg-gradient-to-br from-cherry to-vinyl p-[1px]"
        >
          {/* Header */}
          <div className="flex gap-3 w-full px-4 py-6 items-center border-b-[1px] border-void-500 bg-void-700 rounded-t-lg">
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
              <h4 className="text-2xl truncate w-[12ch] md:w-[22ch]">
                {ev.name}
              </h4>
              <div className="flex gap-1">
                <Image src={group} width={24} height={24} alt="" />
                Team
              </div>
            </div>

            {/* Price */}
            {/* <div className="text-2xl">₹{ev.fee.amount}</div> */}

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
          <div className="p-4 bg-void-950 rounded-b-lg">
            {/* Title */}
            <h5 className="flex gap-2 relative justify-between items-center">
              <h5 className="text-lg">Team Details</h5>

              <button
                className="flex cursor-pointer bg-gradient-to-br py-2 px-2 pr-3 rounded-lg text-black font-semibold gap-1 items-center"
                onClick={() => {
                  const isValid = formRef.current?.reportValidity()
                  if (isValid) {
                    teamDetail.current = {
                      member1: (
                        document.getElementById('member1') as HTMLInputElement
                      )?.value,
                      member2: (
                        document.getElementById('member2') as HTMLInputElement
                      )?.value,
                      member3: (
                        document.getElementById('member3') as HTMLInputElement
                      )?.value,
                      member4: (
                        document.getElementById('member4') as HTMLInputElement
                      )?.value,
                    }
                    setCookie<TeamDetail>(eventCode, teamDetail.current)
                    setCardStatus(Status.filled)
                  }
                }}
              >
                <Image src={save} width={20} height={20} alt="" />
                Save
              </button>
            </h5>

            <form
              className="text-void-300 flex flex-col mt-4 gap-1"
              ref={formRef}
            >
              <div className="flex justify-between">
                <p className="text-white">Leader</p>
                <input
                  type="text"
                  className="bg-transparent rounded pl-1 w-3/5"
                  value="You"
                  readOnly
                  disabled
                />
              </div>
              {[...Array(ev.teamSize.max - 1).keys()].map((idx) => {
                return (
                  <div key={idx} className="flex justify-between">
                    <p className="text-white">
                      Member {idx + 1}
                      <span className="text-cherry">
                        {ev.teamSize.min - 1 >= idx + 1 ? '*' : ''}
                      </span>
                    </p>
                    <input
                      autoCapitalize="words"
                      required={ev.teamSize.min - 1 >= idx + 1}
                      id={`member${idx + 1}`}
                      type="text"
                      autoComplete="name"
                      minLength={3}
                      className="bg-transparent border-void-200 border-[1px] rounded pl-1 placeholder:font-light w-3/5"
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
              <p className="text-sm mt-2">
                Fields marked with <span className="text-cherry">*</span> are
                mandatory
              </p>
            </form>
          </div>
        </div>
      )
    case Status.filled:
      return (
        <div
          id={eventCode}
          className="transition rounded-lg overflow-hidden border-[1px] border-void-500 bg-void-700 mt-4"
        >
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
              <h4 className="text-2xl truncate w-[12ch] md:w-[22ch]">
                {ev.name}
              </h4>
              <div className="flex gap-1">
                <Image src={group} width={24} height={24} alt="" />
                Team
              </div>
            </div>

            {/* Price */}
            <div className="text-2xl">₹{getFilledEventFee()}</div>

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
            <div className="flex gap-2 items-center justify-between">
              <h5 className="text-lg">Team Details</h5>

              <button
                className="flex cursor-pointer bg-void-900 border-[1px] border-void-500 py-1 px-2 rounded-lg font-semibold gap-1 items-center"
                onClick={() => {
                  setCardStatus(Status.edit)
                }}
              >
                <Image src={team_edit} width={20} height={20} alt="" />
                Edit
              </button>
            </div>

            <div className="flex mt-2 flex-col">
              <div className="flex justify-between">
                <p>Leader</p>
                <p className="text-void-300">You</p>
              </div>
              {[...Array(ev.teamSize.max - 1).keys()].map((idx) => {
                return (
                  <div key={idx} className="flex justify-between">
                    <p>Member {idx + 1}</p>
                    <p className="text-void-300">
                      {(teamDetail.current as any)[`member${idx + 1}`]}
                    </p>
                  </div>
                )
              })}
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
