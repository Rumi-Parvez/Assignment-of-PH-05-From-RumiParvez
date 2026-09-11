import logo from "../../assets/logo-text.png"

export function Nav() {
    
    return (
        <>
        
        <div className=" bg-white sticky top-0 ">
            <div className="flex  items-center  container py-3  m-auto justify-between ">
                
                <div className=" ">
                    <img src={logo} alt="logo-text.png" />
                </div>
               
            <div>
                <ul className="flex justify-between items-center gap-8 ">
                    <li><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>

                <div className="flex justify-between gap-4 items-center">
                <button className="">Sign In</button>
                <button className="btn btn-secondary px-5 rounded-full">Sign Up</button>

                </div>
            </div>
        </div>
        
        </>
    )
}