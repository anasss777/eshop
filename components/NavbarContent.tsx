import React from "react";

type Props = {
  name: string;
  subcategory1: string;
  subcategory2: string;
  subcategory3: string;
};

const NavbarContent = (props: Props) => {
  return (
    <div
      className="text-white font-montserrat z-10 cursor-pointer shadow-lightShadowing text-center h-8 md:block md:text-xs md:font-semibold
      md:w-1/6 group lg:text-base lg:font-normal xl:text-lg"
    >
      <button className="bg-blue-300 w-full h-8 hover:bg-blue-400 hover:scale-[1.01] duration-300 transition-all ease-linear">
        {props.name}
      </button>
      <button className="submenu group-hover:block">
        {props.subcategory1}
      </button>
      <button className="submenu group-hover:block">
        {props.subcategory2}
      </button>
      <button className="submenu group-hover:block">
        {props.subcategory3}
      </button>
    </div>
  );
};

export default NavbarContent;