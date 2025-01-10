const Banner = () => {
  return (
    <div className="container mt-32 px-4">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Bagian Kiri */}
        <div className="relative h-[320px] bg-[url(/product-banner-1.jpg)] bg-cover bg-center rounded-xl p-8 flex flex-col justify-center space-y-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-xl"></div>

          <p className="text-lg sm:text-xl font-semibold text-white z-10">
            Nikmati Potongan <span className="font-bold text-yellow-400">20%</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white z-10 leading-tight">
            Semua Produk di Toko
          </h2>
          <a
            className="inline-block mt-6 bg-yellow-500 text-white rounded-full px-8 py-3 font-medium text-lg transform transition-all duration-300 hover:bg-yellow-600 hover:scale-110 shadow-lg"
            href="#"
          >
            Belanja Sekarang!
          </a>
        </div>

        {/* Bagian Kanan */}
        <div className="relative h-[320px] bg-[url(/product-banner-2.jpg)] bg-cover bg-center rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-white font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg">Jelajahi Koleksi Baru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
