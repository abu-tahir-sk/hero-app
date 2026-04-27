const state =[
  {
    "id": 1,
    "title": "Total Downloads",
    "value": "29.6M",
    "growth": "21% More Than Last Month"
  },
  {
    "id": 2,
    "title": "Total Reviews",
    "value": "906K",
    "growth": "46% More Than Last Month"
  },
  {
    "id": 3,
    "title": "Active Apps",
    "value": "132+",
    "growth": "31 More Will Launch"
  }
]
const Trusted = () => {

      return (
            <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-20">
                  <h3 className="text-center text-3xl text-white font-bold">Trusted by Millions, Built for You</h3>
                  <div className="flex justify-center items-center gap-6">
                    {
                      state.map(item=><div key={item.id} className="flex flex-col items-center gap-2 mt-10">
                        <p className="text-gray-100">{item.title}</p>
                        <h1 className="text-3xl leading-14 md:text-5xl text-white font-extrabold">{item.value}</h1>
                        <span className="text-gray-100 text-center text-sm">{item.growth}</span>
                      </div>)
                    }
                  </div>
            </div>
      );
};

export default Trusted;