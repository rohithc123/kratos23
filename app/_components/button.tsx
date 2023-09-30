'use client'

import { Inter } from "next/font/google"
import { MouseEventHandler } from "react";

const inter = Inter({
    subsets: ["latin"],
    weight: '600'
});

export default function Button({ text, active, onClick }: { text: string, active: boolean, onClick: MouseEventHandler }) {
    return (
        <div onClick={onClick} style={inter.style} className={'min-w-[10ch] p-[1px] w-fit text-base  rounded-full  bg-gradient-to-br from-cherry to-vinyl cursor-pointer'}>
            <div className={`px-4 p-3 text-center rounded-full select-none ${active ? 'bg-transparent text-void-950' : 'bg-void-950 text-white'}`}>
                {text}
            </div>
        </div>
    )
}