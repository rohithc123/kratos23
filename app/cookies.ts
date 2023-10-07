/*
  Client side functions to handle cookies

  Current cookie definition:
    -> personal: object literal for personal details
    = { name: 'name1', email: 'mail@example.com', college: 'college name', mobile: '1234567890' }

    -> selected : object literal containing an array of added event codes
    = { events: ['futsal', 'csswars'] }

    - {eventCode}: object literal for storing event team details
    = { member1: 'name1', member2: 'name2', member3: 'name3 }
*/

export function getCookie<T>(key: string): T | undefined {
  if (typeof window !== undefined) {
    let c = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${key}=`))
      ?.split('=')[1]

    if (c) {
      return JSON.parse(atob(c)) as T
    }
  }
}

export function setCookie<T>(key: string, value: T) {
  if (typeof window !== undefined) {
    const age = 60 * 60 * 24 * 7 // 7 days
    document.cookie = `${key}=${btoa(
      JSON.stringify(value)
    )}; max-age=${age}; path=/; samesite=lax;`
  }
}

export function idempotentAddSelectedEvent(eventCode: string) {
  let ckey = 'selected';
  let selected = getCookie<Selected>(ckey);
  if (!selected) {
    setCookie<Selected>(ckey, { events: [eventCode] });
    return;
  }
  if (!selected.events.includes(eventCode)) {
    selected.events.push(eventCode)
    setCookie<Selected>(ckey, { events: selected.events })
  }
}

export function removeSelectedEvent(eventCode: string) {
  let filtered = getCookie<Selected>('selected')?.events.filter((ev) => ev !== eventCode)
  if (filtered) {
    setCookie<Selected>('selected', { events: filtered })
  }
}

export function removeTeamDetails(eventCode: string) {
  let team = getCookie<TeamDetail>(eventCode)
  if (team) {
    document.cookie = eventCode + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }
}

export function eventIsSelected(eventCode: string) {
  return getCookie<Selected>('selected')?.events.includes(eventCode)
}

export type TeamDetail = {
  member1: string
  member2: string
  member3: string
}

export type Selected = {
  events: string[]
}