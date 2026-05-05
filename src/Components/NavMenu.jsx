import { useState } from "react";
import { AiFillHome } from "react-icons/ai";

import { IoIosApps } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import { useNavigate } from "react-router";
const NavMenu = () => {
  const [isActive, setIsActive] = useState("home");
  const navigate = useNavigate();

  return (
    <div className=" py-4 bg-light-secondary shadow-button-flat-nopressed rounded-full  fixed bottom-4 left-[40%] transform -translate-x-[40%] w-[80%] z-50 bg-gradient-to-r from-[#4915c2] to-[#470c9a] flex justify-center items-center gap-4 md:hidden shadow-2xl">
      <button
        onClick={() => {
          setIsActive("home");
          navigate("/");
        }}
        title="Go to the home page"
        className={`text-light-blue-light hover:text-black dark:text-white border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0 ${isActive === "home" ? "bg-gradient-to-r from-[#9F62F2] to-[#632EE3]  text-white " : "bg-light-secondary text-light-blue-light"}`}
      >
        <span className="text-3xl">
          <AiFillHome />
        </span>
      </button>
      <button
        onClick={() => {
          setIsActive("apps");
          navigate("/apps");
        }}
        title="Go to post list page"
        className={`text-light-blue-light hover:text-black dark:text-white border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0 ${isActive === "apps" ? "bg-gradient-to-r from-[#9F62F2] to-[#632EE3]  text-white" : "bg-light-secondary text-light-blue-light"}`}
      >
        <span className="text-3xl">
          {" "}
          <IoIosApps />
        </span>
      </button>
      <button
        onClick={() => {
          setIsActive("install");
          navigate("/installation");
        }}
        title="Go to about me page"
        className={`text-light-blue-light hover:text-black dark:text-white border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0 ${isActive === "install" ? "bg-gradient-to-r from-[#9F62F2] to-[#632EE3]  text-white scale-110" : "bg-light-secondary text-light-blue-light"}`}
      >
        <span className="text-3xl">
          <IoLogoGooglePlaystore />
        </span>
      </button>
    </div>
  );
};

export default NavMenu;
