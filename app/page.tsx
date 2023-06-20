import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <div className="bg-blue-400 w-full h-12 shadow-shadowing">
        <Link href="/">
          <button
            className="font-fancy font-bold text-3xl py-1 px-3 cursor-pointer bg-gradient-to-r from-purple-400 via-blue-700
         to-blue-500 bg-clip-text text-transparent float-left"
          >
            E-Shop
          </button>
        </Link>

        <Image
          src="/loupe.png"
          alt="search logo"
          height={17}
          width={17}
          className="hidden lg:block relative top-2 left-[333px] z-10 h-auto w-auto"
        />
        <input
          type="text"
          className="hidden lg:block relative top-[-26px] mx-auto w-1/2 h-9 rounded-full px-10 font-montserrat focus:border focus:border-blue-400
          outline-none"
          placeholder="Search..."
        />

        <button
          className="hidden lg:block relative bg-blue-500 top-[-58.5px] left-[1122px] text-white font-montserrat px-3 py-[3px] font-bold
        rounded-full"
        >
          Search
        </button>

        {/* profile and cart */}
        <div className="float-right lg:relative lg:top-[-98px]">
          <Image
            src="/user.png"
            alt="user logo"
            height={5}
            width={30}
            className="object-scale-down invert-[90%] float-left py-2 mr-2 h-auto w-auto"
          />
          <Image
            src="/cart.png"
            alt="cart logo"
            height={5}
            width={30}
            className="object-scale-down invert-[90%] float-right py-2 mr-4 h-auto w-auto"
          />
        </div>
      </div>

      {/* Search bar */}
      <div className="bg-blue-200 w-full h-12 flex justify-center items-center lg:hidden">
        <input
          className="w-full mx-6 rounded-full px-3 font-montserrat focus:border focus:border-blue-400 outline-none"
          placeholder="Search..."
        />
      </div>

      {/* Navbar */}
      <ul
        className="font-montserrat text-xl flex flex-col bg-blue-400 text-white font-semibold shadow-shadowing w-56 lg:flex-row lg:w-full
      lg:h-8 lg:relative"
      >
        <li className="submenu">Smart Phones</li>
        <li className="submenu">Laptops</li>
        <li className="submenu">Tablets</li>
        <li className="submenu">Gaming Accessories</li>
        <li className="submenu">Phones Accessories</li>
        <li className="submenu">Smart Watches</li>
      </ul>
    </div>
  );
}
