import footerLogo from "../../assets/logo-text.png";
export function Footer() {
  return (
    <>
      <div className="border-y-2 py-5 ">
        <div className="flex justify-between  container ">
          <div className="w-120 space-y-5">
            <img src={footerLogo} alt="" />
            <p className="text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div>
                
                <ul className="flex items-center gap-4 font-bold text-sm">
                    <li><a href="">GitHub</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul>
            </div>
          </div>

          <div>
            <h1 className="font-bold mb-5 text-sm">PRODUCT</h1>
            <ul className="flex flex-col gap-2 text-gray-500">
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
            <ul className="flex flex-col gap-2 text-gray-500 ">
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
            <ul className="flex flex-col gap-2 text-gray-500">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
              
             
            </ul>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
