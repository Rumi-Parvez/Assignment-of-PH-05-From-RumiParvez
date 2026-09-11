import { RxHamburgerMenu } from "react-icons/rx"
import logo from "../../assets/logo-text.png"

export function Nav() {
    
    return (
        <>
        
        <div className=" flex gap-2 justify-between md:bg-white sticky z-10 top-0 border-gray-200 border-b">
            <div className=" flex  items-center  container m-auto justify-between py-3   px-20">
                <div className="   md:hidden">
                    <RxHamburgerMenu className="text-2xl "  />
                </div>

                
                <div className="  ">
                    <img className="w-full" src={logo} alt="logo-text.png" />
                </div>
               
            <div>
                <ul className=" hidden md:flex justify-between items-center gap-8 text-gray-700 ">
                    <li><a className="hover:text-pink-600 " href="">Home</a></li>
                    <li><a className="hover:text-pink-600 " href="">Technologies</a></li>
                    <li><a className="hover:text-pink-600 " href="">Projects</a></li>
                    <li><a className="hover:text-pink-600 " href="">About</a></li>
                    <li><a className="hover:text-pink-600 " href="">Contact</a></li>
                </ul>
            </div>

                <div className="flex justify-between gap-4 items-center">
                <button className=" ursor-pointer ">Sign In</button>
                <button className=" btn btn-secondary   px-5 rounded-full ">Sign Up</button>

                </div>
            </div>
        </div>
        
        </>
    )
}