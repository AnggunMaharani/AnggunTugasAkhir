const Hero = () => {
  return (
    <div>
      {/* Top Section with Image Background (Only Image) */}
      <div
        className="relative bg-cover bg-center mt-4 py-24"
        style={{ backgroundImage: 'url(/Header.jpg)' }} // Ganti dengan gambar background Anda
      >
        <div className="w-full h-full bg-opacity-50"></div> {/* Optional: Add overlay for darker background */}
      </div>

      {/* Bottom Section with Solid Background and Content */}
      <div className="relative bg-[#F5F3FF] mt-8 py-16">
        <div className="container grid md:grid-cols-2 gap-8 px-4 md:px-0">
          {/* Left side: Text content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center md:text-left">
            <p className="text-lg font-medium text-[#F9A8D4]">
              Starting at <span className="font-bold text-[#F472B6]">Rp 200.000</span>
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#4A2C66] leading-tight">
              Best BTS Album
            </h1>

            <h3 className="text-xl font-semibold text-[#A78BFA]">
              Exclusive <span className="text-red-600">-10%</span> off this week
            </h3>

            <a
              className="inline-block bg-gradient-to-r from-[#9B6FE5] via-[#8B5CF6] to-[#A78BFA] text-white rounded-lg px-8 py-4 text-lg font-medium transform transition-all duration-300 hover:scale-105 hover:opacity-80 shadow-xl"
              href="#"
            >
              Belanja Sekarang!
            </a>
          </div>

          {/* Right side: Image */}
          <div className="relative flex justify-center items-center">
            <img
              className="w-full h-full object-cover rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110"
              src="/hero.jpg"
              alt="Best BTS Album"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
