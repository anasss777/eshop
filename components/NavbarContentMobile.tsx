"use client";

import { Subcategory } from "@/types/Subcategory";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  name: string;
  subcategories: Subcategory[];
  categorySlug: string;
};

const NavbarContentMobile = (props: Props) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <div className="text-white font-montserrat z-10 cursor-pointer shadow-lightShadowing text-center">
      {/* Category section */}
      <button
        className="bg-blue-300 w-full h-fit inline text-left pl-3 pt-1 hover:bg-blue-400 hover:scale-[1.01] duration-300 transition-all
      ease-linear"
      >
        {/* Category name */}
        <Link href={props.categorySlug}>
          <p className="inline">{props.name}</p>
        </Link>

        {/* Dropdown button */}
        <Image
          src="/downward-arrow.png"
          alt="Show submenu button"
          height={30}
          width={30}
          className="invert inline float-right"
          onClick={() => setShowSubmenu(!showSubmenu)}
        />
      </button>

      {/* subcategories Names */}
      {props.subcategories.map((subcategory, index) => (
        <Link key={index} href={`${props.categorySlug}/${subcategory.slug}`}>
          <button
            className="submenu"
            style={{ display: showSubmenu ? "block" : "none" }}
          >
            {subcategory.name || "**********"}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default NavbarContentMobile;
