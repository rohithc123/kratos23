'use client'

import { contributors } from "./contributors"
import Section from "./section"


export default function checkout(){

    // ics = infocontributionsingle
    //just ignore those expansion lol
    let ics = Array.from(contributors);
    
    let info = ics.map(([key,info],idx) => {
        return <Section  key={idx} info={info} />
    })

    // console.log(ics)
    // console.log(icd)

    return(
        <main className="min-h-screen w-screen flex flex-col items-center">
        {/* Spacer */}
        <div className="p-10" />
  
        {/* Header */}
        <header 
        className="z-0 w-full mt-12  text-center">
          <h1 className="text-5xl mb-2">
             Contribution
          </h1>
          <p className="text-base text-void-300 leading-5 px-2 italic mb-6">
          "Alone we can do so little, together we can do so much." – Helen Keller
          </p>
         
          <div className="gird grid-cols-4">
            {info.length !==0 ? info : `add contributors`}
         </div>
            
        </header>
  

      </main>
    )
}