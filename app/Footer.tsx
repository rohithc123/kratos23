import dots from '@/public/dotted-pattern.png'
import instagram from '@/public/instagram.png'
import logo from '@/public/logo.png'
import { Rubik } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const rubik = Rubik({ weight: '400', subsets: ['latin'] })

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ backgroundImage: "url('/dotted-pattern.png')" }}
      className="flex flex-col items-center w-full md:max-w-[768px] relative p-6 pt-12 gap-6 overflow-hidden bg-repeat-x mt-16"
    >
      {/* Logo */}
      <Image src={logo} alt="Kratos 23 logo" width={64} height={64} />

      {/* Instagram link */}
      <Link href="https://www.instagram.com/_kratos23/" className="flex">
        <Image src={instagram} alt="Instagram logo" width={24} height={24} />
        &ensp;@_kratos23
      </Link>

      {/* HR */}
      <div className="h-[1px] w-full bg-void-500" />

      <div className="flex flex-col items-center text-void-200">
        <p className="mb-1">For queries contact</p>
        <div className="flex gap-4">
          <div>
            <h4 className="text-xl" style={rubik.style}>
              Janagan
            </h4>
            <p className="text-sm">9941686706</p>
          </div>
          <div>
            <h4 className="text-xl" style={rubik.style}>
              Hariharan
            </h4>
            <p className="text-sm">9384979459</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-void-300">
        © 2023 Kratos&apos;23 ·{' '}
        <Link
          href="https://github.com/nithssh/kratos23"
          className="hover:text-void-200 transition"
        >
          GitHub repo
        </Link>
      </p>
    </footer>
  )
}
