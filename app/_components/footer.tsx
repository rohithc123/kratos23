import dots from '@/public/dotted-pattern.png';
import instagram from '@/public/instagram.png';
import logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-screen relative p-6 pt-12 gap-6">
      {/* bg */}
      <Image src={dots} alt="" className="position absolute inset-0 z-[-1] w-full" />

      {/* Logo */}
      <Image src={logo} alt="Kratos 23 logo" width={64} height={64} />

      {/* Instagram link */}
      <Link href='https://www.instagram.com/_kratos23/' className="flex">
        <Image src={instagram} alt="Instagram logo" width={24} height={24} />
        &ensp;_kratos23
      </Link>

      {/* HR */}
      <div className='h-[1px] w-full bg-void-500'/>

      {/* Links */}
      <div className='flex flex-col items-center gap-4 text-void-300 font-normal'>
        <Link href='/terms'>Terms of Service</Link>
        <Link href='/privacy'>Privacy Policy</Link>
        <Link href='/conduct'>Code of Conduct</Link>
        <Link href='https://github.com/nithssh/kratos23'>GitHub repo</Link>
      </div>

      {/* Copyright */}

      <p className='text-void-500'>© 2023 Kratos</p>
    </footer>
  );
}
