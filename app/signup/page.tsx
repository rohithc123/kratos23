'use client';

/*
  We need to extract the input data at some level through refs or other means. 
  The form section is most of this page, and extracting that out to a wrapped 
  client component doesn't make sense (the page doesn't have much else).
*/

import { Poly } from 'next/font/google';
import Link from 'next/link';
import TextInput from '../_components/textinput';
import pfp from '@/public/pfp.png';
import Image from 'next/image';
import Button from '../_components/button';
import { Suspense, useRef } from 'react';
const poly_reg = Poly({ weight: '400', subsets: ['latin'] });

export default function Signup() {
  const data = useRef();

  return (
    <main className="min-h-screen w-screen flex flex-col items-center">
      {/* Spacer */}
      <div className="p-10" />

      <header className="w-full mt-12 px-4">
        <h1 style={poly_reg.style} className="text-5xl mb-2">
          Your Details
        </h1>
        <p className="text-base text-void-300 leading-5">
          Enter the remaining details to complete the signup process
        </p>
      </header>

      {/* Form */}
      <div className="w-full p-6 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          {/* TODO plug the right profile picture src */}
          <Image
            src={pfp}
            alt="Your profile picture taken from your google account"
            className="h-16 w-16 rounded-full border-[1px] border-void-500"
          />

          <TextInput
            label="Name"
            value={undefined} // TODO plug the value
            placeholder="First Last" // shouldn't be needed after plugging
          />
        </div>
        <TextInput
          label="Email"
          placeholder="user@example.com" // shouldn't be needed after plugging
          disabled={true}
          value={undefined} // TODO plug the value
        />
        <TextInput label="College" placeholder="College name" />
        <TextInput label="Mobile" placeholder="10-digit mobile number" />

        {/* Final Button */}
        {/* TODO plug the submission button */}
        <div className="py-4">
          <Button
            text="Create Account"
            onClick={() => {
              alert('TODO');
            }}
            fullWidth={true}
          />
        </div>

        {/* Notices */}
        {/* TODO create the policy pages */}
        <div className="text-base text-void-300 ">
          <p>
            By signing up, you agree to the{' '}
            <Link href={'/terms'} className="underline">
              Terms of Service
            </Link>
            , and{' '}
            <Link href={'/privacy'} className="underline">
              Privacy Policy.
            </Link>
          </p>
          <br />
          <p>
            Kratos23 is committed to the ethical handling of your personal data.
          </p>
        </div>
      </div>
    </main>
  );
}
