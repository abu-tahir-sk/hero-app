import { Link, NavLink,} from "react-router";
import { AiFillGithub } from "react-icons/ai";



const Navbar = () => {

  
  const handleGithub = () => {
  
  window.open("https://github.com/abu-tahir-sk", "_blank");
}
  return (
   <div className="shadow-md border-b border-gray-300">
     <div className="flex items-center justify-between  py-4 bg-white px-4  max-w-7xl mx-auto">
        <Link to="/">
      <div className="flex  items-center gap-2">
        <img className="w-10 h-10" src="/logo.png" alt="" />
        <h2 className="text-[18px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  ">
          Apps Hero
        </h2>
      </div>
        </Link>
      <div>
        <ul
          className={`hidden md:flex absolute md:static duration-300  md:items-center gap-8`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent md:border-b-2 border-[#9F62F2] "
                  : "hover:text-[#9F62F2] transition duration-200 hover:bg-[#9F62F2]/50 flex md:flex-col text-black "
              }
            >
            
 Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent md:border-b-2 border-[#9F62F2] "
                  : "hover:text-[#9F62F2] transition duration-200 hover:bg-[#9F62F2]/50  flex flex-col"
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent md:border-b-2 border-[#9F62F2]"
                  : "hover:text-[#9F62F2] transition duration-200 hover:bg-[#9F62F2]/50 flex flex-col"
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button className="text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-2 px-5 text-[16px] font-semibold rounded  hover:bg-gradient-to-r hover:from-[#9F62F2] hover:to-[#632EE3] transition-colors duration-300 animated-button1" onClick={handleGithub}>
           <span></span>
  <span></span>
  <span></span>
  <span></span>
          
         
       
        <div className="flex items-center gap-2">
            <AiFillGithub className="text-xl" /> Contribute
        </div>
        </button>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
