import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="">
      <div className="pt-[80px]">
        <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight font-bold text-center">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent pr-2">
            Productive
          </span>
          Apps
        </h1>
        <p className="text-center mt-4 text-gray-500 text-base px-3 max-w-2xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="mt-4 flex justify-center">
    
    <div className="flex justify-center items-center gap-6 py-8">
      <div className="flex items-center gap-2 border border-gray-300 px-5 py-2 shadow hover:bg-gradient-to-r from-blue-400 to-blue-500 transition duration-300 rounded hover:text-white">
        <img className="w-7 h-8 bg-blue-500" src="../../src/assets/googleplay.jpg" alt="ddad" />
      <h5 className="font-semibold text-[20px]"><Link to="https://play.google.com" target="_blank">Google Play</Link></h5>
      </div>
      <div className="flex items-center gap-2 border border-gray-300 px-5 py-2 shadow hover:bg-gradient-to-r from-blue-400 to-blue-500 transition duration-300 rounded hover:text-white">
        <img className="w-7 h-8"  src="../../src/assets/appStore.jpg" alt="ddad" />
      <h5 className="font-semibold text-[20px]"><Link to="https://apps.apple.com" target="_blank">App Store</Link></h5>
      </div>
     
    </div>
  </div>
      </div>
      <div className="flex justify-center items-center">
        <img className="" src="../../src/assets/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
