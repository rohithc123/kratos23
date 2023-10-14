import { NextRequest, NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";
import { DB } from "./database";

// The mongo refs
const db = await DB.getDB()
const accounts = db.collection('accounts')
const registrations = db.collection('registrations')

const gcs = new Storage({ keyFilename: './gcs-key.json' })
const bucket = gcs.bucket('kratos-23')

// DEBUG change to POST
export async function GET(request: NextRequest) {
  // Get the info from the cookies
  const cookies = request.cookies.getAll()
  var cookie_vals = {};
  for (let cookie of cookies) {
    let val = JSON.parse(atob(cookie.value))
  }

  // TODO validate the type structure
  // ...

  return new NextResponse(undefined, { status: 200, statusText: "HELLO" })
}
