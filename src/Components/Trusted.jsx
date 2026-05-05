import {  FaStar } from "react-icons/fa";
import { IoDownload } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";



const state = [
  {
    id: 1,
    title: "Total Downloads",
    value: "29.6M",
    growth: "21% More Than Last Month",
    icon: IoDownload,
  },
  {
    id: 2,
    title: "Total Reviews",
    value: "906K",
    growth: "46% More Than Last Month",
    icon: FaStar
  },
  {
    id: 3,
    title: "Active Apps",
    value: "132+",
    growth: "31 More Will Launch",
    icon: IoLogoGooglePlaystore
  }
];
const Trusted = () => {

      return (
            <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-20">
                  <h3 className="text-center text-3xl text-white font-bold">Trusted by Millions, Built for You</h3>
                  <div className="md:flex justify-center items-center gap-3 md:gap-6 py-10">
                    {
                      state.map(item=><div key={item.id} className="flex flex-col items-center gap-2 mt-10">

                       <div className=" md:flex  justify-center items-center ">
                        <div className="flex flex-col justify-center items-center">
                           <p className="text-gray-100 ">{item.title}</p>
                        <h1 className="text-3xl md:leading-14 md:text-5xl text-white font-extrabold">{item.value}</h1>
                        <span className="text-gray-100 text-center
                        ">{item.growth}</span>
                        </div>
                       <div className="flex flex-col justify-center items-center text-white text-4xl md:text-5xl mt-5 md:mt-0">
                        <item.icon />
                       </div>
                       </div>
                      </div>)
                    }
                  </div>
            </div>
      );
};

export default Trusted;