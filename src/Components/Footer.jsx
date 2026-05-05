import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
        const year = new Date().getFullYear();
      return (
            <div className="bg-[#001931]">
                

<footer className="bg-neutral-primary-soft">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-white">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src="/logo.png" className="h-7 me-3" alt="FlowBite Logo" />
                  <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">Apps Hero</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Resources</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Follow us</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Legal</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-default sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
            
          <span className="text-sm text-body sm:text-center">© {year}  <a href="/" className="hover:underline">Apps Hero</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            
                            

                              
            <a className="text-body hover:text-heading ms-5" href=""><FaFacebookF /></a>
           <a className="text-body hover:text-heading ms-5" href=""><FaXTwitter /></a>
           <a className="text-body hover:text-heading ms-5" href=""><FaLinkedinIn /></a>
          
          
          </div>
      </div>
    </div>
</footer>

            </div>
      );
};

export default Footer;