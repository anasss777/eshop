"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {
  name: string;
  subcategory1: string;
  subcategory2: string;
  subcategory3: string;
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

      {/* subcategory 1 Name */}
      <button
        className="submenu"
        style={{ display: showSubmenu ? "block" : "none" }}
      >
        {props.subcategory1}
      </button>

      {/* subcategory 2 Name */}
      <button
        className="submenu"
        style={{ display: showSubmenu ? "block" : "none" }}
      >
        {props.subcategory2}
      </button>

      {/* subcategory 3 Name */}
      <button
        className="submenu"
        style={{ display: showSubmenu ? "block" : "none" }}
      >
        {props.subcategory3}
      </button>

      {/* Show Category Button */}
      {/* <button
        className="text-black"
        style={{ display: showSubmenu ? "block" : "none" }}
      >
        Show {props.name}
      </button> */}
    </div>
  );
};

export default NavbarContentMobile;
