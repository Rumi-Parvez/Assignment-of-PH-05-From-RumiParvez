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
        <div className="px-20 my-10 ">
            <div className=" container m-auto">
            <div>
                <h1 className="text-4xl font-bold mb-1">Explore the <span className="bg-linear-r bg-pink-500 via-violet-400 bg-clip-text text-transparent">Technologies</span></h1>
                <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
            </div>



           <div className="flex justify-between mt-10">
             
               <div className="grid grid-cols-3 gap-7 w-[75%] ">
                 {
                technologis.map(tech => <Tech key={tech.id} tech={tech}></Tech>)
                }

                </div>


                <div>
                    <div className="w-[25%] sticky top-19">

                    <div className="w-90 border   border-gray-300 rounded-2xl p-10   ml-5" >
                        <h1 className="text-2xl font-bold mb-1">Your Stack</h1>
                        <p className="mb-3 text-sm text-gray-400">No technologies selected yet.</p>

                        <div className="w-full border-2 border-dashed border-gray-200 py-6 flex items-center justify-center rounded-2xl">
                            <p>Your stack is empty.</p>
                        </div>

                    </div>
                    
                </div>
            
                </div>
                
           


            
            </div>
        </div>
        </div>
        </>
    )
}