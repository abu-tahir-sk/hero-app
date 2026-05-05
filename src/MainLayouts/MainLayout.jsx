import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NavMenu from "../Components/NavMenu";

const MainLayout = () => {
      return (
            <div className="inter-font">
                  <div className=""><Navbar/></div>
                  <div className="min-h-[calc(100vh-245.68px)] "><Outlet/></div>
                 <div className="flex md:hidden">
                   <NavMenu/>
                 </div>
                  <Footer/>
                  
            </div>
      );
};    

export default MainLayout;