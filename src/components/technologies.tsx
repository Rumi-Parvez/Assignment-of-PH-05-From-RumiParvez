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
        <div>
            {
                technologis.map(tech => <Tech key={tech.id} tech={tech}></Tech>)
            }
        </div>
        </>
    )
}