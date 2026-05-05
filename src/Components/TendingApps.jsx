import { useEffect, useState } from "react";
import App from "./App";
import { Link, useNavigate } from "react-router";
import { FaArrowTrendUp } from "react-icons/fa6";
const TendingApps = () => {
  const [apps, setApps] = useState([]);
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();

  console.log(apps);

  useEffect(() => {
    setLoading(true);
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
      });
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }, []);


  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/apps");
    }, 2000);
  };
  return (
    <div className="py-20 max-w-7xl mx-auto p-4">
      <h3 className="text-3xl md:text-5xl font-bold text-center  leading-tight flex items-center justify-center gap-3">
        Trending Apps
        <span className="text-[#632EE3]  ">
          <FaArrowTrendUp />
        </span>
      </h3>
      <p className="text-center text-gray-500 text-[20px]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-50 my-10">
        {apps.slice(0, 8).map((app) => (
          <App key={app.id} app={app} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {" "}
        {loading ? (
          <div className="   border-t-transparent flex justify-center items-center text-3xl font-semibold">L<span className=""><img src="/logo.png" className="animate-spin h-12 w-12" alt="" /></span>ading</div>
        ) : (
          <button
            className="font-semibold text-[16px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-[#9F62F2] hover:to-[#632EE3] transition-colors duration-300"
            onClick={handleClick}
          >
            <Link to="">Show All</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default TendingApps;
