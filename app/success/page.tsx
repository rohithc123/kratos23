import { Poly } from 'next/font/google'
import arrow_left from '@/public/arrow_left.svg'
import Image from 'next/image'
import Link from 'next/link'

const poly = Poly({ weight: '400', subsets: ['latin'] })

export default function Success() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center gap-6 px-6">
      <h1 style={poly.style} className="text-5xl">
        Registration Successful!
      </h1>
      <p className="text-void-200">
        You will receive email confirmation later from the organizers.
        We&apos;ll see you on campus on 2nd November!
      </p>
      <Link href='/' className="bg-gradient-to-br from-cherry to-vinyl w-full rounded-full text-void-950 p-3 flex justify-center font-semibold">
        <Image src={arrow_left} width={24} height={24} alt='' />
        Back to home page
      </Link>
    </main>
  )
}
