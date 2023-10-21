'use client'
import Image from 'next/image'
import Link from 'next/link'
import open_in_new from '@/public/open_in_new.svg'

export default function ExternalButton({
  label,
  link,
}: {
  label: string
  link: string
}) {
  return (
    <Link
      href={link}
      className={`p-3 flex text-center justify-center rounded-full select-none gap-1 transition w-[14ch] text-base font-medium bg-gradient-to-br from-cherry to-vinyl cursor-pointer text-void-950 leading-5`}
    >
      {label}
      <Image src={open_in_new} alt="" height={16} width={16} />
    </Link>
  )
}
