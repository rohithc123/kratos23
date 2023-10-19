import { events } from "@/app/events/eventInfo";
import { NextResponse } from 'next/server';
import { DB } from "../submit/database";

const db = await DB.getDB()
const registrations = db.collection('registrations')

export const dynamic = 'force-dynamic'
export async function GET() {
  let countQueries = []
  for (let evCode of events.keys()) {
    countQueries.push(registrations.countDocuments({ eventCode: evCode }))
  }

  // Note: Doing this is fine since the events map doesn't change between last loop and this
  const countValues = await Promise.all(countQueries)
  let evCodes = Array.from(events.keys())
  let countPairs: { [key: string]: number } = {}
  for (let i = 0; i < evCodes.length; i++) {
    countPairs[evCodes[i]] = countValues[i]
  }

  return NextResponse.json({ message: countPairs }, { status: 200 })
}
