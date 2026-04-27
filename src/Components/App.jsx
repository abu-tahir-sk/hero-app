import { IoMdStar } from "react-icons/io";

import { LuDownload } from "react-icons/lu";

const App = ({app}) => {
      const {id, title,ratingAvg, image,downloads
} = app;
      return (
            <div className="p-4  bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                  <img className="w-[316px] h-[200px] rounded-md" src={image} alt={title} />
                  <h3 className="text-[18px] font-medium pt-2">{title}</h3>
                  <div className="flex justify-between items-center pt-4">
                        <div className="flex items-center gap-1 bg-[#F1F5E8] rounded py-[2px] text-[#00D390] px-3 font-medium"><LuDownload />{downloads}M</div>
                        <div className="flex items-center gap-1 bg-[#FFF0E1] rounded py-[2px] px-3 font-medium text-[#FF8811] "><IoMdStar /> {ratingAvg}</div>
                  </div>
            </div>
      );
};

export default App;