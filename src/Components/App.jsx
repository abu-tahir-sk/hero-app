import { IoMdStar } from "react-icons/io";

import { LuDownload } from "react-icons/lu";
import { useNavigate } from "react-router";
import Revel from "../Pages/Revel";

const App = ({ app, loading, setLoading }) => {
  const { id, title, ratingAvg, image, downloads } = app;

  const navigate = useNavigate();

  const handleDetails = () => {
    setLoading(true);
    navigate(`/app/${id}`);
    loading &&
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  };
  return (
   <Revel>
     <div>
      {loading ? (
        <div className="   border-t-transparent flex justify-center items-center text-3xl font-semibold">
          L
          <span className="">
            <img src="/logo.png" className="animate-spin h-12 w-12" alt="" />
          </span>
          ading
        </div>
      ) : (
        <div
          onClick={handleDetails}
          className="p-4  bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
        >
          <img
            className="w-full md:w-[316px] h-[200px] rounded-md"
            src={image}
            alt={title}
          />
          <h3 className="text-[18px] font-medium pt-2">{title}</h3>
          <div className="flex justify-between items-center pt-4">
            <div className="flex items-center gap-1 bg-[#F1F5E8] rounded py-[2px] text-[#00D390] px-3 font-medium">
              <LuDownload />
              {downloads}M
            </div>
            <div className="flex items-center gap-1 bg-[#FFF0E1] rounded py-[2px] px-3 font-medium text-[#FF8811] ">
              <IoMdStar /> {ratingAvg}
            </div>
          </div>
        </div>
      )}
    </div>
   </Revel>
  );
};

export default App;
