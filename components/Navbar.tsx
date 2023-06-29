"use client";

import React, { useEffect, useState } from "react";
import NavbarContent from "./NavbarContent";
import { Category } from "@/types/Category";
import { getCategories } from "@/sanity/sanity-utils";

const Navbar = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };

    fetchData();
  }, []);

  return (
    <div className="hidden md:flex md:flex-row">
      {categories
        .sort(
          (a, b) =>
            new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime()
        )
        .map((category) => (
          <NavbarContent
            key={category._id}
            name={category.name}
            subcategory1={
              category.subcategory
                ? category.subcategory[0]?.name
                : "***********"
            }
            subcategory2={
              category.subcategory
                ? category.subcategory[1]?.name
                : "***********"
            }
            subcategory3={
              category.subcategory
                ? category.subcategory[2]?.name
                : "***********"
            }
          />
        ))}
    </div>
  );
};

export default Navbar;
