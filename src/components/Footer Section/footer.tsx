import footerLogo from "../../assets/logo-text.png";
export function Footer() {
  return (
    <>
      <div className="border-y    m-0! border-gray-200 ">
        <div className="flex justify-between  container px-20 py-10">
          <div className="w-120 space-y-5 ">
            <img src={footerLogo} alt="" />
            <p className="text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div>
                
                <ul className="flex items-center gap-4 font-semibold text-sm">
                    <li><a href="">GitHub</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul>
            </div>
          </div>

          <div>
            <h1 className="font-bold mb-5 text-sm">PRODUCT</h1>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Technologies</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              
            </ul>
          </div>
          <div>
            <h1 className="font-bold mb-5 text-sm">COMPANY</h1>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              
            </ul>
          </div>
          <div>
            <h1 className="font-bold mb-5 text-sm" >LEGAL</h1>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
              
             
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center px-20 border-t border-gray-200 py-8">

        <div>
            <p className="text-gray-400 text-sm">© 2026 Dev Stack. All rights reserved.</p>
        </div>

        <div>
            <ul className="flex gap-10 items-center text-gray-400 text-sm">
                <li><a href="">Privacy</a></li>
                <li><a href="">Terms</a></li>
            </ul>
        </div>

        </div>
      </div>
    </>
  );
}
