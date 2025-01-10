
import { useAppSelector } from "@/redux/hooks";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

interface propsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart }: propsType) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className="pt-4 bg-gradient-to-r from-purple-300 to-purple-500 sticky top-0">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">Magic Hope</h1>
          <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              className="border-2 border-purple-600 rounded-full px-6 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="text"
              placeholder="Cari produk..."
            />
            <div className="bg-purple-600 text-white text-[26px] grid place-items-center px-4 rounded-full cursor-pointer hover:bg-purple-700 transition-all">
              <BsSearch />
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex gap-3 hidden">
              <div className="rounded-full border-2 border-purple-400 text-purple-500 text-[32px] w-[50px] h-[50px] grid place-items-center hover:bg-purple-300 transition-all">
                <AiOutlineUser />
              </div>

              <div>
                <p className="text-purple-300">Hello, Sign in</p>
                <p className="font-medium text-white">Your Account</p>
              </div>
            </div>

            <div
              className="text-white text-[32px] relative cursor-pointer hover:text-purple-200 transition-all"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart />

              <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-purple-400 pt-4" />
      </div>
    </div>
  );
};

export default Navbar;