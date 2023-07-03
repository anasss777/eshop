import { Subcategory } from "@/types/Subcategory";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  subcategories: Subcategory[];
  categorySlug: string;
};

const NavbarContent = (props: Props) => {
  return (
    <div
      className="text-white font-montserrat z-10 cursor-pointer shadow-lightShadowing text-center h-8 md:block md:text-xs md:font-semibold
      md:w-1/6 group lg:text-base lg:font-normal xl:text-lg"
    >
      {/* Category Name */}
      <Link href={props.categorySlug}>
        <button className="bg-blue-300 w-full h-8 hover:bg-blue-400 duration-300 transition-all ease-linear">
          {props.name}
        </button>
      </Link>

      {/* Subcategories Names */}
      {props.subcategories.map((subcategory, index) => (
        <Link key={index} href={`${props.categorySlug}/${subcategory.slug}`}>
          <button className="submenu group-hover:block">
            {subcategory.name || "**********"}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default NavbarContent;
