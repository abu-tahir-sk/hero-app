import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import App from "../Components/App";

const Apps = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);
  return (
      <div className="bg-gray-100">
    <div className="py-20 max-w-7xl mx-auto">
      <h3 className="text-5xl font-bold text-center  leading-tight">
        Our All Applications
      </h3>
      <p className="text-center text-gray-500 text-[20px]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between items-center pt-6">
        <div className="font-semibold text-[24px]">{apps.length} Apps</div>
         <div className="relative ">
            <CiSearch className="absolute top-3 left-4 text-[20px]" />
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" type="text" placeholder="Search" /></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {apps.map((app) => (
          <App key={app.id} app={app} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Apps;
