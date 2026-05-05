

const Loader = () => {
      return (
              <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col  items-center gap-4">
       <div className="flex items-center gap-2">
             <h3 className="text-5xl font-bold text-[#632EE3]">
            Apps 
        </h3>
        <img
          src="/logo.png"
          alt="logo"
          className="w-20 h-20 animate-pulse"
        />
        <h3 className="text-5xl font-bold text-[#632EE3]">
          Hero
        </h3>
       </div>


      </div>
    </div>
      );
};

export default Loader;