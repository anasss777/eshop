"use client";

import { TheContext } from "@/context/stateContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import NavbarContentMobile from "./NavbarContentMobile";
import { Category } from "@/types/Category";
import { getCategories } from "@/sanity/sanity-utils";

const NavbarMobile = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };

    fetchData();
  }, []);

  const context = useContext(TheContext);

  if (!context) {
    // Handle the case when the context is not yet available
    return null;
  }
  const { isOpen, setIsOpen } = context;

  return (
    <div className="flex flex-col relative">
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
          {categories
            .sort(
              (a, b) =>
                new Date(a._createdAt).getTime() -
                new Date(b._createdAt).getTime()
            )
            .map((category) => (
              <NavbarContentMobile
                key={category._id}
                name={category.name}
                subcategoriesNames={
                  category.subcategory.map((item) => item.name) || "**********"
                }
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
