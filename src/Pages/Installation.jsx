import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { GrInstall } from "react-icons/gr";

import "react-tabs/style/react-tabs.css";
import { getStoredApp, removeFromStoredApp } from "../utility/utility";
import { toast } from "react-toastify";

const Installation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Sort By Size");

  const options = ["Small", "Medium", "Sort By Size"];

  const data = useLoaderData();

  const storedAppData = getStoredApp();
  const convertedStoredApps = storedAppData.map((id) => parseInt(id));
  const appList = data.filter((app) => convertedStoredApps.includes(app.id));
  const [sortedApps, setSortedApps] = useState(appList);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    setTimeout(() => {
      setSortedApps(appList);
      setLoading(false);
    }, 800);
  }, [data]);

  const handleDelete = (id) => {
    setLoading(true);
    removeFromStoredApp(id);

    const updated = sortedApps.filter((app) => app.id !== id);
    setSortedApps(updated);
    if (updated) {
      (toast.success(" App removed!"), { position: "top-center" });
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSort = (type) => {
    setLoading(true);
    let sortedApps = [...appList];
    if (type === "Sort By Size") {
      sortedApps = [...appList];
    }
    if (type === "Small") {
      sortedApps.sort((a, b) => a.reviews - b.reviews);
    }
    if (type === "Medium") {
      sortedApps.sort((a, b) => b.reviews - a.reviews);
    }
    setSortedApps(sortedApps);
    
    setTimeout(() => {
      
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="bg-gray-100">
      <div className="py-20 max-w-7xl mx-auto px-4">
        {/* title  */}
        <h3 className="text-3xl md:text-5xl font-bold text-center  leading-tight flex justify-center items-center gap-2">
          Our All Applications <span className="text-4xl text-[#632EE3] animate-spin">
<GrInstall /></span>
        </h3>
        <p className="text-center text-gray-500 text-[20px]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        {/* apps founds */}
        <div className="flex justify-between items-center pt-6">
          <div className="font-semibold text-[24px]">
            {appList.length} Apps Found
          </div>
          {/* dropdown */}
          <div className=" ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 flex items-center gap-2"
            >
              {selected}
              <span>
                <IoMdArrowDropdown className="text-[24px]" />
              </span>
            </button>
            {isOpen && (
              <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                      handleSort(option);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* app cards */}
        {loading ? (
        
          <div className="flex justify-center items-center py-10">
            <div className="   border-t-transparent flex justify-center items-center text-3xl font-semibold">L<span className=""><img src="/logo.png" className="animate-spin h-12 w-12" alt="" /></span>ading</div>
          </div>
        ) : (
          <div className="overflow-x-auto py-4">
            {sortedApps.length === 0 ? (
              <div className="text-center py-10">
                <h2 className="font-bold text-3xl md:text-5xl pb-2 bg-linear-to-tr from-[#632EE3] to-[#5e06da] bg-clip-text text-transparent">
                  No Apps Installed 
                </h2>
                <p className=" text-gray-500 ">
                  {" "}
                  Please install some apps to see them here.
                </p>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-100">
                <tbody className=" divide-y divide-gray-100 ">
                  {/* row 1 */}
                  {sortedApps.map((app) => (
                    <tr
                      key={app.id}
                      className="bg-white    cursor-pointer flex justify-between items-center gap-6 p-4 rounded-md mb-5    shadow transition-all duration-300  hover:shadow-2xl hover:-translate-y-2"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900  whitespace-nowrap ">
                        <div className="flex items-center gap-3">
                          <div className=" overflow-hidden flex-shrink-0">
                            <img
                              className="h-[60px] w-[60px] rounded-md "
                              src={app.image}
                              alt={app.title}
                            />
                          </div>

                          <div>
                            <div className="font-medium text-lg">
                              {app.title}
                            </div>
                            <div className="text-sm flex items-center gap-4">
                              <div className="flex gap-1 items-center text-[#00D390] text-[16px] font-medium">
                                <span>
                                  <FiDownload />
                                </span>
                                {app.downloads}MB
                              </div>
                              <div className="flex items-center gap-1 text-[#FF8811] text-[16px] font-medium">
                                <span>
                                  <FaStar />
                                </span>
                                {app.ratingAvg}
                              </div>
                              <div className=" text-[16px] font-medium">
                                {app.reviews}M
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <button
                          className="bg-[#00D390] text-white px-5 py-2 rounded "
                          onClick={() => handleDelete(app.id)}
                        >
                          Uninstall
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
