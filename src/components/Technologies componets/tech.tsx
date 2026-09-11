
import type { IDataType } from "../../type";
import { FaStar } from "react-icons/fa";
import {  type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";


export interface TechProps {
  tech: IDataType;
  addedTech : IDataType[]
  setAddedTech : Dispatch<SetStateAction<IDataType[]>>
  count : number;
  setCount : Dispatch<SetStateAction<number>>

}

export default function Tech({ tech , addedTech , setAddedTech , count , setCount}: TechProps) {
    const added = addedTech.find((item) => item.id === tech.id);

 

    const handleAddClick = () => {
    const alreadyAdded = addedTech.find((item) => item.id === tech.id);
    if (alreadyAdded) {
    toast.warning(`${tech.name} is already in your stack.`);
    return;
  }

    setAddedTech([...addedTech,tech])
    setCount(count+1)


    if(count >= 0 ){
     toast.success(`${tech.name} added to your stack!`)

    }

   

  };

  return (
    <>
      <div>
        <div
          className={
            added
              ? "p-8 pt-10 border-3 border-pink-200  rounded-2xl  space-y-2"
              : "p-8 pt-10 border border-gray-300 rounded-2xl  space-y-2"
          }>
          <div className="flex justify-between items-center mb-8">
            <img
              className="h-10 w-10"
              src={tech.icon}
              alt={`the icon of ${tech.name}`}
            />
            <h1 className="bg-pink-50 px-4 py-1 rounded-2xl text-pink-700 text-xs">
              {tech.badge}
            </h1>
          </div>
          <h1 className="text-2xl font-bold my-4">{tech.name}</h1>
          <p className="text-sm text-gray-500 ">{tech.description}</p>

          <div className="flex justify-between items-center text-xs py-2 border-t mt-5 border-gray-100 ">
            <h1 className="bg-gray-100 px-4 py-1 rounded-sm text-gray-600">
              {tech.category}
            </h1>
            <h1 className="text-gray-500">{tech.difficulty}</h1>
            <h1 className=" flex items-center gap-2 font-semibold">
              <FaStar className="text-yellow-500" />
              {tech.rating}
            </h1>
          </div>

          <button
            className={
              added
                ? "btn  w-full rounded-[10px] bg-pink-100 text-pink-400 border-none"
                : "btn btn-neutral w-full rounded-[10px] bg-gray-900"
            }
            onClick={handleAddClick}
            >
            {added ?  "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </>
  );
}
