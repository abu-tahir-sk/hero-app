import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

import "react-tabs/style/react-tabs.css";
import { getStoredApp, removeFromStoredApp } from "../utility/utility";

const Installation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Sort By Size");

  const options = ["Small", "Medium", "Sort By Size"];

  const data = useLoaderData();

  const storedAppData = getStoredApp();
  const convertedStoredApps = storedAppData.map((id) => parseInt(id));
  const appList = data.filter((app) => convertedStoredApps.includes(app.id));
  const [sortedApps, setSortedApps] = useState(appList);

  const handleDelete = (id) => {
    removeFromStoredApp(id);

    const updated = sortedApps.filter((app) => app.id !== id);
    setSortedApps(updated);
  };

  const handleSort = (type) => {
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
  };
  return (
    <div className="bg-gray-100">
      <div className="py-20 max-w-7xl mx-auto">
        {/* title  */}
        <h3 className="text-5xl font-bold text-center  leading-tight">
          Our All Applications
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
        <div className="overflow-x-auto py-4">
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
                        <div className="font-medium text-lg">{app.title}</div>
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
                    <button className="bg-[#00D390] text-white px-5 py-2 rounded " onClick={() => handleDelete(app.id)}>
                      Uninstall
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Installation;
