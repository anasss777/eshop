"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {
  name: string;
  subcategoriesNames: string[];
};

const NavbarContentMobile = (props: Props) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <div className="text-white font-montserrat z-10 cursor-pointer shadow-lightShadowing text-center">
      {/* Category Name */}
      <button className="bg-blue-300 w-full h-8 text-left pl-3 hover:bg-blue-400 hover:scale-[1.01] duration-300 transition-all ease-linear">
        <p className="pt-1">{props.name}</p>
        <Image
          src="/downward-arrow.png"
          alt="Show submenu button"
          height={30}
          width={30}
          className="invert relative -top-7 mr-1 float-right"
          onClick={() => setShowSubmenu(!showSubmenu)}
        />
      </button>

      {/* subcategories Names */}
      {props.subcategoriesNames.map((name, index) => (
        <button
          key={index}
          className="submenu"
          style={{ display: showSubmenu ? "block" : "none" }}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default NavbarContentMobile;
