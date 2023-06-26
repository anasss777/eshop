"use client";

import { TheContext } from "@/context/stateContext";
import Image from "next/image";
import React, { useContext } from "react";
import NavbarContentMobile from "./NavbarContentMobile";

const NavbarMobile = () => {
  const context = useContext(TheContext);

  if (!context) {
    // Handle the case when the context is not yet available
    return null;
  }
  const { isOpen, setIsOpen } = context;

  return (
    <div>
      {/* Search bar on mobile */}
      <div className="bg-blue-200 w-full h-12 flex justify-center items-center md:hidden">
        <Image
          src={isOpen ? "/close.png" : "/menu.png"}
          alt="Menu"
          width={20}
          height={20}
          className="ml-3 invert"
          onClick={() => setIsOpen(!isOpen)}
        />
        <input
          className="w-full mx-3 rounded-full px-3 font-montserrat focus:border focus:border-blue-400 outline-none"
          placeholder="Search..."
        />
      </div>

      {isOpen && (
        <div className="flex flex-col w-56 md:hidden">
          <NavbarContentMobile
            name="Smart Phones"
            brand1="Samsung Phones"
            brand2="iPhone"
            brand3="Xiaomi Phones"
          />
          <NavbarContentMobile
            name="Laptops"
            brand1="Mac"
            brand2="HP"
            brand3="Lenovo"
          />
          <NavbarContentMobile
            name="Gaming Accessories"
            brand1="Keyboard"
            brand2="Monitor"
            brand3="Mouse"
          />
          <NavbarContentMobile
            name="Tablets"
            brand1="iPad"
            brand2="Samsung Tables"
            brand3="Xiaomi Tablets"
          />
          <NavbarContentMobile
            name="Phones Accessories"
            brand1="Earphone"
            brand2="Charger"
            brand3="Power Bank"
          />
          <NavbarContentMobile
            name="Smart Watches"
            brand1="Samsung Watches"
            brand2="iPhone watches"
            brand3="Huawei Watches"
          />
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
