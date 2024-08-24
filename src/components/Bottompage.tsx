import { Button } from "@/components/ui/button"
export default async function Bottompage(){
    return(
        <section className="bg-white text-black flex flex-col justify-center">
            <div className="flex flex-col items-center"><p className="font-bold text-[3rem] pt-12 font-serif">OUR BIG GOAL</p><p className="font-bold text-[2.5rem] text-[#000000] opacity-40 font-serif py-4">SAVE OUR ENDANGERED ANIMALS</p></div>
            <div className="flex mb-16">
                <div className="px-16 text-[1.25rem] font-bold text-center"><p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti atque quidem rerum, ducimus repellendus impedit amet itaque reiciendis eius animi molestias nulla nostrum sapiente veritatis, numquam cupiditate aliquam! Quam est sapiente earum molestias!</p><Button className="w-48 h-12 rounded-[2.5rem] bg-[#a3e0f3] text-[1.5rem] font-bold text-black font-serif " variant="outline">Donate</Button></div>
                <div className="px-16 text-[1.25rem] font-bold text-center"><p className="py-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat animi, unde nostrum ad vel iste, dolores illum voluptatibus architecto, velit cum itaque nam recusandae ab numquam quis dicta nemo repellat vitae expedita. Aperiam, illum!,</p><Button className="w-48 h-12 rounded-[2.5rem] bg-[#a3e0f3] text-[1.5rem] font-bold text-black font-serif " variant="outline">Get Started</Button></div>
            </div>
        </section>
    )
}