import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
        const year = new Date().getFullYear();
      return (
            <div className="bg-[#001931]">
                <div className="max-w-7xl mx-auto  py-8">
             <div className="flex justify-between items-center px-4 md:px-0">
                  <div className="flex items-center gap-3">
                        <img className="w-10 h-10" src="/logo.png" alt="Logo" />
                        <h2 className="font-bold text-[16px] text-white">Hero.Io </h2>
                  </div>
                  <div className="">
                        <h4 className="font-bold text-[16px] text-white text-center">Social Links</h4>
                        <div className="flex items-center gap-4 pt-3">
                              <a className="text-[#001931] bg-white rounded-full p-1" href=""><FaFacebookF /></a>
                             <a className="text-[#001931] bg-white rounded-full p-1" href=""><FaXTwitter />
</a>
                              <a className="text-[#001931] bg-white rounded-full p-1" href=""><FaLinkedinIn /></a>
                        </div>
                  </div>
                  
                 </div>
                 <div className="border-t border-[#54CF68]/30 my-3 "></div>
                 <div>
                  <p className="text-gray-300 text-center">Copyright © {year} - All right reserved</p>
                 </div>
                </div>
            </div>
      );
};

export default Footer;