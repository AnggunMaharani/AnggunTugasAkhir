import { useState } from "react";
import FeatureCard from "./FeatureCard";
import { TbTruckDelivery, TbDiscount } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Pengiriman Gratis",
    desc: "Gratis ongkir untuk semua produk dengan minimum pembelian Rp 500.000.",
    detailedDesc: "Kami menawarkan pengiriman gratis untuk semua produk dengan minimum pembelian Rp 500.000. Nikmati pengiriman cepat dan aman tanpa biaya tambahan untuk wilayah domestik maupun internasional.",
  },
  {
    icon: <RiRefund2Fill className="text-4xl" />,
    title: "Retur & Pengembalian Dana",
    desc: "Garansi uang kembali jika tidak puas.",
    detailedDesc: "Jika Anda tidak puas dengan produk yang diterima, kami memberikan jaminan retur dan pengembalian dana dalam waktu 30 hari. Proses pengembalian barang sangat mudah dan tanpa ribet.",
  },
  {
    icon: <TbDiscount className="text-4xl" />,
    title: "Diskon Anggota",
    desc: "Diskon eksklusif untuk pembelian lebih dari Rp 1.000.000",
    detailedDesc: "Menjadi anggota kami memberikan Anda keuntungan dengan diskon khusus pada pembelian lebih dari Rp 1.000.000. Daftar sekarang untuk mendapatkan lebih banyak manfaat dan penawaran menarik lainnya.",
  },
  {
    icon: <MdSupportAgent className="text-4xl" />,
    title: "Dukungan 24/7",
    desc: "Layanan pelanggan siap membantu kapan saja.",
    detailedDesc: "Tim dukungan pelanggan kami tersedia 24 jam sehari, 7 hari seminggu. Hubungi kami melalui chat, email, atau telepon untuk bantuan kapan saja. Kami siap membantu Anda setiap saat.",
  },
];

const Feature = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleCardClick = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <div
          key={item.title}
          className="cursor-pointer transform transition-all duration-300 hover:scale-105"
          onClick={() => handleCardClick(item)}
        >
          <FeatureCard
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        </div>
      ))}
      
      {/* Modal untuk menampilkan informasi lebih detail */}
      {isModalOpen && selectedFeature && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl w-1/2 max-w-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedFeature.title}</h3>
            <p className="text-lg text-gray-600 mb-4">{selectedFeature.detailedDesc}</p>
            <button
              onClick={handleCloseModal}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature;
