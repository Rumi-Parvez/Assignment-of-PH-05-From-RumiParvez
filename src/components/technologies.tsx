import { use } from "react"
import type { IDataType } from "../type"
import Tech from "./Technologies componets/tech";

export interface TechnologiesProps {
    getDataPermisions: Promise<IDataType[]>
}

export default function Technologies({ getDataPermisions }: TechnologiesProps) {

    const technologis =  use<IDataType[]>(getDataPermisions);
    
    return (
        <>
        <div className="px-20 my-10">
            <div className=" container m-auto">
            <div>
                <h1 className="text-4xl font-bold mb-1">Explore the <span className="bg-linear-r bg-pink-500 via-violet-400 bg-clip-text text-transparent">Technologies</span></h1>
            <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div>
               <div className="grid grid-cols-3 gap-7 w-[75%] mt-10">
                 {
                technologis.map(tech => <Tech key={tech.id} tech={tech}></Tech>)
            }
            <div className="w-[25%] ">

            </div>
               </div>
            </div>
        </div>
        </div>
        </>
    )
}