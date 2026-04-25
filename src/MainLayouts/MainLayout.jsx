import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
      return (
            <div >
                  <div className="shadow"><Navbar/></div>
                  <div className="min-h-[calc(100vh-245.68px)]"><Outlet/></div>
                  <Footer/>
                  
            </div>
      );
};    

export default MainLayout;