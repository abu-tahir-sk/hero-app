import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import "react-tabs/style/react-tabs.css";

const Installation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Sort By Size");
  const options = ["Small", "Medium"];
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
          <div className="font-semibold text-[24px]">1 Apps Found</div>
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
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              {/* row 1 */}
              <tr className="hover:bg-gray-100 cursor-pointer flex justify-between items-center gap-6 p-4">
                <td className="px-6 py-4 text-sm text-gray-900  whitespace-nowrap">
                  <div className="flex   items-center gap-3">
                    <div className="">
                      <div className=" h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>

                 <td className="px-6 py-4">
          <button className="btn btn-ghost btn-xs">details</button>
        </td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  );
};

export default Installation;
