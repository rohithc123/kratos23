'use client'

import { Poly } from 'next/font/google'
import Image from 'next/image'

const poly = Poly({ weight: '400', subsets: ['latin'] })

export default function Events({ params }: { params: { category: string } }) {
 

  return (
    <main className="min-h-screen w-screen flex flex-col items-center md:max-w-[900px]">
      <div className="p-10" />

      {/* Header */}
      <header className="w-full mt-12 px-2 text-center">
        <h1 style={poly.style} className="text-5xl mb-2">
          Events Guidelines
        </h1>
      </header>

<div className="px-4">
      <ol className="list-decimal list-outside p-3 pl-8 bg-void-700 mt-4 rounded-lg border-[1px] border-void-500 font-light">
      <li>
      College ID card is mandatory. Participants without ID cards will not be permitted in EEC premises.
      </li>
      <li>
      Please wear your college ID cards while you are in EEC premises.
      </li>
      <li>
      Follow a proper and neat dress code.
      </li>
      <li>
      Maintain discipline and decorum.
      </li>
      <li>
      Registration kits and food tokens are only for the participants who have done online registrations.
      </li>
      <li>
      Please collect your registration kit (inclusive of food token, participant wrist band) at the registration desk.
      </li>
      <li>
      Parking at your own risk.
      </li>
    </ol>
</div>

    </main>
  )
}
