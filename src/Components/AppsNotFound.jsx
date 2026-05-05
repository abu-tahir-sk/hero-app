import { useState } from "react";
import { useNavigate } from "react-router";

const AppsNotFound = ({ resetSearch }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleGoBack = () => {
    setLoading(true);

    setTimeout(() => {
      resetSearch();
      setLoading(false);
      navigate("/apps", { replace: true }); 
    }, 300);
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      {loading ? (
        <div className="   border-t-transparent flex justify-center items-center text-3xl font-semibold">
          L
          <span className="">
            <img src="/logo.png" className="animate-spin h-12 w-12" alt="" />
          </span>
          ading
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto py-8">
          <img className="" src="../../src/assets/App-Error.png" alt="" />
          <h4 className="font-semibold text-3xl md:text-5xl leading-tight">
            OPPS!! APP NOT FOUNDd!
          </h4>
          <p className="text-[#16px] text-gray-500 py-2">
            The page you are looking for is not available.
          </p>
          <button
            className="font-semibold text-[16px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-[#9F62F2] hover:to-[#632EE3] transition-colors duration-300"
            onClick={handleGoBack}
          >
            Go to Apps
          </button>
        </div>
      )}
    </div>
  );
};

export default AppsNotFound;
