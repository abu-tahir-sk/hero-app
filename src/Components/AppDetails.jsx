import { useLoaderData, useParams } from "react-router";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const AppDetails = () => {
      const {id}=useParams();
      const appId = parseInt(id);
      const data =useLoaderData();
      const appDetails = data.find(app=>app.id === appId);
      const {title, image, ratingAvg, downloads, companyName, reviews} = appDetails;
      console.log(appDetails);

      const app = data[0];
      const sortedRatings = [...app.ratings].reverse();
      console.log(app);
  return <div className="">
 {/* image and details   */}
     <div className="flex justify-around">
       <div>
      <img className="w-64" src={image} alt={title} />
      </div>
      <div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>{companyName}</p>
            <div className="flex items-center">
                  <div>{downloads}</div>
                  <div>{ratingAvg}</div>
                  <div>{reviews}</div>
            </div>

      </div>
     

     </div>
      <div className="max-w-7xl mx-auto" style={{ width: "100%", height: 300 }}>
        <h3 className="font-bold">Ratings</h3>
            <BarChart
      style={{ width: '100%', maxWidth: '1100px', maxHeight: '40vh', aspectRatio: 1.618 }}
      responsive
      layout="vertical" 
      data={sortedRatings}
       margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
   
    >
       <XAxis type="number"  />
       <YAxis dataKey="name" type="category" />
      <Bar dataKey="count"  fill="#f97316" radius={[0, 10, 10, 0]}> </Bar>
    </BarChart>
      </div>


  </div>;
};

export default AppDetails;
