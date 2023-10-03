'use client'
import add from '@/public/add.svg'
import tick from '@/public/tick.svg'
import Image from 'next/image'

export default function AddToBagButton() {
  // TODO plug the inversion
  const inverted = false
  return (
    <div
      onClick={() => {
        alert('clicked')
      }}
      className={`min-w-[10ch] h-fit p-[1px] w-fit text-base  rounded-full font-medium bg-gradient-to-br from-cherry to-vinyl cursor-pointer`}
    >
      <div
        className={`p-3 flex text-center rounded-full select-none gap-1 ${
          inverted ? 'bg-void-950 text-white' : 'bg-transparent text-void-950'
        }`}
      >
        {inverted ? 'Added' : 'Add to Bag'}
        <Image src={inverted ? tick : add} alt="" height={16} width={16} />
      </div>
    </div>
  )
}
