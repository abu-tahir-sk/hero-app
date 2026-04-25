const Banner = () => {
  return (
    <div>
      <div className="pt-[80px]">
        <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight font-bold text-center">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent pr-2">
            Productive
          </span>
          Apps
        </h1>
        <p className="text-center mt-4 text-gray-500 text-base max-w-2xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div class="mt-4 flex justify-center">
    <div class="w-32 h-1 bg-blue-400 rounded-full"></div>
    <div>
      <button className=""></button>
      <button></button>
    </div>
  </div>
      </div>
    </div>
  );
};

export default Banner;
