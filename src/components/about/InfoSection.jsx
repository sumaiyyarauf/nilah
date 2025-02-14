const InfoSection = () => {
  return (
    <div className="flex flex-col lg:flex-row my-6 sm:my-10 md:my-12 lg:my-[5%] mx-4 sm:mx-8 md:mx-16 lg:mx-[100px] gap-6 sm:gap-8 md:gap-10 lg:gap-12 rounded-[45px] p-6 sm:p-8 md:p-10 lg:p-12 bg-[linear-gradient(279.96deg,_rgba(236,242,249,0.9)_-4.54%,_rgba(239,236,250,0.801)_95.29%),_linear-gradient(0deg,_rgba(255,255,255,0.2),_rgba(255,255,255,0.2))]">

      <div className="lg:w-1/2">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1A3261]">
          Nunc id non faucibus maecenas velit
        </h2>
      </div>
      <div className="lg:w-1/2 relative">
        <p className="text-sm sm:text-base md:text-lg text-[#38587E] relative z-10"> Provide advisory services across various aspects of business, global partnership and fund raising support. We also specialise in cross-border promotion and cross-border business acceleration as well.
        </p>
        <button className="bg-gradient-to-r from-[#2347C7] to-[#39ABDC] w-full text-white px-6 py-3 mt-[10%] rounded-md">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default InfoSection;
