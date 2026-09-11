import { DiTechcrunch } from "react-icons/di";
import type { IDataType } from "../../type";
import { FaStar } from "react-icons/fa";

export interface TechProps {
  tech: IDataType;
}

export default function Tech({ tech }: TechProps) {
  return (
    <>
      <div>
        <div className="p-8 pt-10 border border-gray-300 rounded-2xl  space-y-3">
          <div className="flex justify-between items-center mb-8">
            <img
              className="h-10 w-10"
              src={tech.icon}
              alt={`the icon of ${tech.name}`}
            />
            <h1 className="bg-violet-200 px-5 py-1 rounded-2xl text-violet-600">
              {tech.badge}
            </h1>
          </div>
          <h1 className="text-2xl font-bold">{tech.name}</h1>
          <p className="text-sm ">{tech.description}</p>
          <div className="flex justify-between items-center text-xs py-2">
            <h1>{tech.category}</h1>
            <h1>{tech.difficulty}</h1>
            <h1 className=" flex items-center gap-2 font-semibold">
              <FaStar className="text-yellow-500" />
              {tech.rating}
            </h1>
          </div>
          <button className="btn btn-neutral w-full rounded-[10px] bg-gray-900 ">Add to Stack</button>
        </div>
      </div>
    </>
  );
}
