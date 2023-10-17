import { NextRequest, NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";
import { DB } from "./database";
import { PersonalDetails, TeamDetail } from "../cookies";
import { events } from "../events/eventInfo";

// The mongo refs
const db = await DB.getDB()
const accounts = db.collection('accounts')
const registrations = db.collection('registrations')

if (!process.env.GCS_CRED) {
  console.error(`GCS_CRED not in .env! Exiting...`)
  process.exit(2)
}

const cred = JSON.parse(atob(process.env.GCS_CRED!))
const gcs = new Storage({ projectId: 'kratos-23-402015', credentials: cred })
const bucket = gcs.bucket('kratos-23')

export async function POST(req: NextRequest) {
  // Get screenshot 
  let _screenshot: File | null = (await req.formData()).get('screenshot') as unknown as File
  if (!_screenshot) return NextResponse.json({ message: "No screenshot attached" }, { status: 400, statusText: "No Screenshot" })
  const screenshotBuffer = Buffer.from(await _screenshot.arrayBuffer())

  // Get account info
  let _per = req.cookies.get('personal')
  if (!_per) return NextResponse.json({ message: "No personal details" }, { status: 400, statusText: "No PersonalDetails" })
  const personal: PersonalDetails = JSON.parse(atob(_per.value))

  // get added events
  let _addEv = req.cookies.get('selected')
  if (!_addEv) return NextResponse.json({ message: "No events selected" }, { status: 400, statusText: "No Selected" })
  const addedEvents: string[] = JSON.parse(atob(_addEv.value)).events

  // get event team details
  var teamDetails: Map<string, TeamDetail> = new Map<string, TeamDetail>()
  for (let evCode of addedEvents) {
    let ev = events.get(evCode)
    let _team = req.cookies.get(evCode)
    if (!ev) return NextResponse.json({ message: `Selected event does not exist: ${evCode}` }, { status: 400, statusText: "Invalid event" })
    if (ev.type == 'solo') continue
    if (!_team) return NextResponse.json({ message: `No team details for ${evCode}` }, { status: 400, statusText: "No TeamDetails" })
    teamDetails.set(evCode, JSON.parse(atob(_team!.value)) as TeamDetail)
  }

  // TODO validate the type structure

  // Note: Not enforcing data uniquness.i.e. Same user can register for the same
  // event more than once. This isn't something users will do usually due to cost

  // Upload the screenshot to bucket
  const fileExt = _screenshot.name.split('.').findLast(() => true)
  const fileName = `screenshots/${personal.mobile}-${Date.now()}-screenshot.${fileExt}`
  const file = bucket.file(fileName)
  try {
    await file.save(screenshotBuffer)
  } catch (e) {
    console.error("Error uploading screenshot to bucket.", e)
    return NextResponse.json({ message: "Error occured when processing the screenshot" }, { status: 500, statusText: "Error processing screenshot" })
  }

  // push the account to db
  accounts.insertOne(personal)

  // push the registrations to db
  let regs: Array<Registration> = []
  for (let evCode of addedEvents) {
    const team = teamDetails.get(evCode)
    let reg: Registration = {
      email: personal.email,
      eventCode: evCode,
      screenshotName: fileName,
      member1: team?.member1,
      member2: team?.member2,
      member3: team?.member3,
    }
    regs.push(reg)
  }
  registrations.insertMany(regs)

  return NextResponse.json({ message: "Successfully registered!" }, { status: 200 })
}


type Registration = {
  email: string;
  eventCode: string;
  screenshotName: string;
  member1?: string;
  member2?: string;
  member3?: string;
}