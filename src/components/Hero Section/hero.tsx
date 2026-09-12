import heroImg from "../../assets/banner-stack.png"

export function Hero() {
  return (
    <>
      <div className=" pb-0 py-15 px-4 md:px-20 md:my-0 md:py-2">
        <div className="container m-auto flex flex-col md:flex-row justify-between gap-6 md:gap-20">
          <div className="flex flex-col items-center md:items-start justify-center text-center 
          space-y-4 md:text-left  md:space-y-10 w-full md:w-300">
            <h1 className="text-[32px] font-bold  md:text-7xl md:font-bold">
              Build Your Ideal <br />
              <span className="bg-linear-to-r from-orange-500 via-pink-600 to-violet-700 bg-clip-text text-transparent">Development Stack</span>
            </h1>

            <p className="pr-0 md:pr-30 text-sm md:text-base leading-6 text-gray-700 p">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="flex  items-center  pl-10 md:p-0 md:m-0  md:items-start   gap-2 md:gap-8  w-[90%] md:w-[68%]">
              <button className="btn  rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-2
              text-xs md:px-4 py-3 
                  md:font-semibold  text-white ">Explore Technologies</button>
              <button className="btn  rounded-lg px-2 md:px-15 text-xs md:text-base font-medium bg-white">Learn More</button>
            </div>

          </div>


          <div className=" flex justify-center items-center w-[100%] md:w-[60%]">

            <img className=" w-[200%] bg-cover max-w-75 md:max-w-none md:w-full  md:h-full mx-auto" src={heroImg} alt="banner-stack.png" />

          </div>


        </div>
      </div>
    </>
  );
}
