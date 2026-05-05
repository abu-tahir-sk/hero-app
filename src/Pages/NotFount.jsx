import { useState } from "react";
import {  useNavigate } from "react-router";



const NotFount = () => {
      const [loading,setLoading]=useState(false);
        const navigate = useNavigate();

        const handleGoBack = () => {
            setLoading(true);
              navigate(-1); 
              setTimeout(()=>{
            setLoading(false);
      },900)
              
        }

      
      return (
            <div className="flex flex-col justify-center items-center h-screen  bg-gray-50">
                  {
                        loading ? <div className="loader mb-4">Loading...</div> : <div className="flex flex-col justify-center items-center"> <img src="../../src/assets/error-404.png" alt="" />
                  <h4 className="font-semibold text-5xl leading-tight">Oops, page not found!</h4>
                  <p className="text-[#16px] text-gray-500 py-2">The page you are looking for is not available.</p>
                  <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 text-white font-semibold rounded" onClick={handleGoBack}>Go Back! </button></div>
                  }
                 
            </div>
      );
};

export default NotFount;