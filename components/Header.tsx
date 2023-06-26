import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import UserAccount from "./UserAccount";
import Cart from "./Cart";

const Header = () => {
  return (
    <div className="bg-blue-400 w-full h-12 shadow-shadowing grid grid-cols-2 md:grid md:grid-cols-4 md:grid-rows-1">
      {/* Website Logo */}
      <Link href="/">
        <button className="logo">E-Shop</button>
      </Link>

      {/* Search bar on large screen */}
      <SearchBar />

      {/* profile and cart */}
      <div className="float-right">
        <UserAccount />
        <Cart />
      </div>
    </div>
  );
};

export default Header;
