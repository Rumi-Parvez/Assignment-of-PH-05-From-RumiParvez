import { use, useState } from "react";
import type { IDataType } from "../type";
import Tech from "./Technologies componets/tech";
import { HiMiniXMark } from "react-icons/hi2";
import { toast } from "react-toastify";

export interface TechnologiesProps {
  getDataPermisions: Promise<IDataType[]>;
}

export default function Technologies({ getDataPermisions }: TechnologiesProps) {
  const [addedTech, setAddedTech] = useState<IDataType[]>([]);
    
  const technologis = use<IDataType[]>(getDataPermisions);


  const [count, setCount] = useState<number>(0);

  const handleDeletTech = async (itemToDelete: IDataType) => {
    setAddedTech((prev) => prev.filter((selected) => selected.id !== itemToDelete.id));
    toast.info(`${itemToDelete.name} removed from your stack.`)
    setCount(count - 1)
  };

  const handleRemoveAll = () => {
  setAddedTech([]);
  setCount(0);
  toast.info("All technologies removed from your stack.");
};


  return (
    <>
      <div className="px-20 my-10 ">
        <div className=" container m-auto">
          <div>
            <h1 className="text-4xl font-bold mb-1">
              Explore the{" "}
              <span className="bg-linear-r bg-pink-500 via-violet-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>
            <p className="text-gray-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="flex justify-between mt-10">
            <div className="grid grid-cols-3 gap-7 w-[75%] ">
              {technologis.map((tech) => (
                <Tech
                  addedTech={addedTech}
                  setAddedTech={setAddedTech}
                  key={tech.id}
                  tech={tech}
                  count={count}
                  setCount={setCount}
                  
                ></Tech>
              ))}
            </div>

            <div >
              {addedTech.length > 0 ? (
                <div className="sticky top-19">
                  <div>
                    <div className="w-[25%] ">
                      <div className="w-90 border   border-gray-300 rounded-2xl p-10   ml-5">
                        <h1 className="text-2xl font-bold mb-1">Your Stack</h1>
                        <p className="mb-3 text-sm text-gray-400">
                          {count} technologies selected yet.
                        </p>


                        {addedTech.map((techadded) => {
                          return (
                            <>
                              <div className="flex justify-between w-full border border-gray-300 py-5 px-5 items-center mb-3 rounded-xl">
                                <div className=" flex items-center gap-3">
                                    <img className="h-8 w-8" src={techadded.icon} alt={techadded.name} />
                                    <div>
                                        <h1 className="font-bold text-sm" >{techadded.name}</h1>
                                        <p className="text-xs text-gray-500 ">{techadded.category}</p>
                                    </div>

                                </div>
                                <HiMiniXMark className="text-2xl text-gray-400 cursor-pointer hover:text-red-200 " onClick={()=> handleDeletTech(techadded)} />

                              </div>
                            </>
                          );
                        })}

                        <button className="btn btn-outline btn-error w-full rounded-xl font-bold text-red-600 hover:text-white mt-5" onClick={handleRemoveAll}>Remove All</button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-[25%] sticky top-19">
                  <div className="w-90 border   border-gray-300 rounded-2xl p-10   ml-5">
                    <h1 className="text-2xl font-bold mb-1">Your Stack</h1>
                    <p className="mb-3 text-sm text-gray-400">
                      No technologies selected yet.
                    </p>

                    <div className="w-full border-2 border-dashed border-gray-200 py-6 flex items-center justify-center rounded-2xl">
                      <p>Your stack is empty.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
