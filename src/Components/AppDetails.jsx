import { useLoaderData, useParams } from "react-router";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const appDetails = data.find((app) => app.id === appId);
  const { title, image, ratingAvg, downloads, companyName, reviews } =
    appDetails;
  console.log(appDetails);

  const app = data[0];
  const sortedRatings = [...app.ratings].reverse();

  return (
    <div className="pt-10 mx-auto max-w-7xl">
      {/* image and details   */}
      <div className="flex flex-col md:flex-row items-center gap-10 pb-10 ">
        <div>
          <img className="w-[220px] h-[200px]" src={image} alt={title} />
        </div>
        <div className="px-6 md:px-2">
          <h2 className="text-3xl font-bold leading-tight">{title}</h2>
          <p className="text-gray-500 pb-2">
            Developed by:
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
              {companyName}
            </span>
          </p>
          <div className="border-b border-gray-400"></div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col py-3">
              <img className="w-8 h-8" src="../../src/assets/icon-downloads.png" alt="" />
              <div className="text-gray-500 py-2">Downloads</div>
              <h3 className="font-extrabold text-3xl">{downloads}M</h3>
            </div>
            <div className="flex flex-col">
              <img className="w-8 h-8" src="../../src/assets/icon-ratings.png" alt="" />
              <div className="text-gray-500 py-2">Average Ratings</div>
              <h3 className="font-extrabold text-3xl">{ratingAvg}</h3>
            </div>
            <div className="flex flex-col">
              <img className="w-8 h-8" src="../../src/assets/icon-review.png" alt="" />
              <div className="text-gray-500 py-2">Reviews</div>
              <h3 className="font-extrabold text-3xl">{reviews}K</h3>
            </div>
          </div>
          <button className="bg-[#00D390] text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
            Install Now (292 MB)
          </button>
        </div>
      </div>

      <div className="border-b border-gray-400"></div>

      <div className="w-full h-[300px] bg-gray-200 p-4 rounded-lg my-6">
        <h2 className="text-lg font-semibold mb-4">Ratings</h2>

        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            layout="vertical"
            data={sortedRatings}
            margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
          >
            {/* Y Axis (Star labels) */}
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fontSize: 14 }}
              width={50}
              tickMargin={20}
              axisLine={false}
              tickLine={false}
            />

            {/* X Axis (Values) */}
            <XAxis type="number" />
            <Tooltip />

            {/* Bars */}
            <Bar dataKey="count" radius={[0, 10, 10, 0]}>
              {sortedRatings.map((entry, index) => (
                <Cell key={index} fill="#f97316" /> // orange
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppDetails;
