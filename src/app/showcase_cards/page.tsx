// const cardPage = () => {
//   return (
//     <div className="flex items-center ">
//       <div className="w-[190px] h-[254px] bg-[#3405a3] rounded-[15px] shadow-[1px_5px_60px_0px_rgba(16,10,136,0.42)]">
//         <div className="w-[60%] h-[3%] bg-[#6b64f3] mx-auto rounded-b-[15px]"></div>
//         <div className="w-[70px] h-[80px] bg-[#6b64f3] rounded-[15px] mx-auto mt-[25px]"></div>
//         <span className="font-semibold text-white text-center block pt-[10px] text-[16px]">
//           Person
//         </span>
//         <p className="font-normal text-white text-center block pt-[3px] text-[12px]">
//           Job Title
//         </p>
//         <button className="px-[25px] py-[8px] block mx-auto rounded-[8px] mt-[30px] bg-[#6b64f3] text-white font-semibold hover:bg-[#534bf3]">
//           Click
//         </button>
//       </div>
//     </div>
//   )
// }

// export default cardPage
import {PawPrint} from "lucide-react";
import Image from "next/image"
import Navbar from "@/components/Navbar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Smile } from "lucide-react"
  
const arr=[
    "/one.png",
]
let e="HAPPY"
async function mood() {
  if(e=="HAPPY"){
    return <Image src={"/smile.png"} height={30} width={30} alt="emoji" />;
  }
  
  else if(e=="SAD"){
    return <Image src={"/slightly_frowning_face.png"} height={30} width={30} alt="emoji" />;
  }
  
  else if(e=="DEPRESSED"){
    return <Image src={"/pensive.png"} height={30} width={30} alt="emoji" />;
  }
  
  else if(e=="NEEDLOVE"){
    return <Image src={"/pleading-face.1024x986.png"} height={30} width={30} alt="emoji" />;
  }
  
}
export default async function ShowCards() {
    return(
        <section>
            <Navbar/>
            <div className="flex items-center justify-center pt-10 px-10">
                <p className="text-5xl font-bold">Cards</p>
            </div>
            <div className="flex justify-center">
            
    {arr.map((e,index)=>(
                    <div key={index} className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title"></p>
            <img className="w-[18.75rem] h-[18.75rem] self-center rounded-xl" src={e} alt="" />
            <p className="text-2xl font-bold pt-4">Messi</p>
            <p className="text-1xl">The G.O.A.T</p>
            <div className="flex justify-center gap-3 pt-2 ">




  <div className="emojis">
    {mood()}

  </div>
            </div>
        </div>
        <div className="flip-card-back text-[1.3rem] flex flex-col">
          <PawPrint className="flex self-center py-2 h-14"/>
            <p className="py-2"><b className="text-gray-600">Name: </b>MS Dhoni</p>
            <p className="py-2"><b className="text-gray-600">Height: </b>6ft 3inch</p>
            <p className="py-2"><b className="text-gray-600">Weight: </b>90kg</p>
            <p className="py-2"><b className="text-gray-600">Height: </b>6ft 3inch</p>
            <p className="py-2"><b className="text-gray-600">Height: </b>6ft 3inch</p>
            <p className="py-2"><b className="text-gray-600">Height: </b>6ft 3inch</p>
        </div>
    </div>
</div>
                ))}   
            </div>
            <div className="flex justify-center">
            <button className="shadow__btn">
    Donate
</button>
            </div>
        </section>
    )

}
