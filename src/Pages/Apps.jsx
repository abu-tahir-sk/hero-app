import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import App from "../Components/App";
import { IoIosApps } from "react-icons/io";
import AppsNotFound from "../Components/AppsNotFound";
import Revel from "./Revel";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
      })
      .catch(() => {
        setApps([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const filteredAppsData = apps.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Revel>
      <div className="bg-gray-100">
      <div className="py-20 max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold text-center  leading-tight flex justify-center items-center gap-2 ">
          Our All Applications{" "}
          <span className="text-[#632EE3]">
            <IoIosApps />
          </span>
        </h3>
        <p className="text-center text-gray-500 text-[20px]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex justify-between items-center pt-6 px-4">
          <div className="font-semibold text-[24px]">
            {filteredAppsData.length} Apps
          </div>
          <div className="relative ">
            <CiSearch className="absolute top-3 left-4 text-[20px]" />
            <input
              value={searchTerm}
              onChange={handleSearch}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center mt-10">
    <div className="   border-t-transparent flex justify-center items-center text-3xl font-semibold">L<span className=""><img src="/logo.png" className="animate-spin h-12 w-12" alt="" /></span>ading</div>
</div>
        ) :apps.length === 0 ? (
  //  Step 2: No data from API
  <div className="col-span-full text-center">
    <AppsNotFound  message="No apps available" 
  resetSearch={() => setSearchTerm("")} />
  </div>

) : filteredAppsData.length === 0 ? (
  //  Step 3: Search result empty
  <div className="col-span-full text-center">
    <AppsNotFound message="No apps found" 
  resetSearch={() => setSearchTerm("")} />
  </div>

): (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 px-4">
            {filteredAppsData.length > 0 ? (
              filteredAppsData.map((app) => <App key={app.id} setLoading={setLoading} loading={loading} app={app} />)
            ) : (
              <div className="col-span-full text-center text-gray-500">
                <AppsNotFound resetSearch={() => setSearchTerm("")} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </Revel>
  );
};

export default Apps;
