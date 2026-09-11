import heroImg from "../../assets/banner-stack.png"

export function Hero() {
  return (
    <>
      <div className="mt-3 px-20">
        <div className="container m-auto flex justify-between gap-60 ">
          <div className="flex flex-col  justify-center space-y-10 w-190 ">
            <h1 className="text-7xl font-bold">
              Build Your Ideal <br />
              <span className="bg-linear-to-r from-orange-500 via-pink-600 to-violet-700 bg-clip-text text-transparent">Development Stack</span>
            </h1>

            <p className="pr-10 text-gray-700">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="gap-8 flex">
                <button className="btn btn-active btn-warning rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-4 py-3 font-semibold text-white ">Explore Technologies</button>
                <button className="btn rounded-lg px-15 font-medium">Learn More</button>
            </div>

          </div>


          <div className="">

            <img className="w-full h-full" src={heroImg} alt="banner-stack.png" />

          </div>


        </div>
      </div>
    </>
  );
}
