
import { contributorsInfo } from "./contributors"


export default function Section({
    type,
    info,
} : {
    type: string
    info: contributorsInfo
}) {
    // console.log(info.name)
    // console.log(name);

    let namesdisplay;

    if(info.type === 'Single'){

    let names = Array.from(info.name);
    namesdisplay = names.map((arr,idx) => {
        return (
            <div key={idx} className="text-xl mt-1">
               {arr}
            </div>
        )
    })
   } else {
    let names = Array.from(info.name_designation)
    console.log(names);
    namesdisplay = names.map((item,idx) => {
        return(
            <div key={idx} className="grid grid-row-2">
            <div  className="text-xl mt-1 ">
               {item.designation}
            </div>

            <div  className="text-xl mt-1">
               {item.name}
            </div>
            
            </div>
        )
    })
   }

    return(
        <div>
        <div className=" bg-void-700 w-full">
    
        <div className="text-5xl p-10">
        {info.header}
         <div>
         <div className="text-xl mt-10">
         {namesdisplay}
        </div>
         
         </div>
       
        </div>
       </div>
       </div>
      
   )
}