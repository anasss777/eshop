"use client";

import { TheContext } from "@/context/stateContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import NavbarContentMobile from "./NavbarContentMobile";
import { Category } from "@/types/Category";
import { getCategories } from "@/sanity/sanity-utils";
import NavbarContent from "./NavbarContent";
import { useRouter, useSearchParams } from "next/navigation";

const Navbar = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  // Search parameters
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  );
  const router = useRouter();

  // Search function
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
    setSearchQuery("");
  };

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
    <div>
      {/* For mobile */}
      <div className="flex flex-col relative md:hidden">
        {/* Search bar on mobile */}
        <form onSubmit={handleSearch}>
          <div className="bg-blue-300 w-full h-12 flex justify-center items-center border-b border-b-white md:hidden">
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
              value={searchQuery || ""}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button
              className="bg-blue-500 float-right text-white font-montserrat px-3 font-bold rounded-full mr-3"
              onClick={() => handleSearch}
            >
              Search
            </button>
          </div>
        </form>

        {isOpen && (
          <div className="absolute top-12 flex flex-col w-56 md:hidden">
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
                  categorySlug={`/${category.slug}`}
                  subcategories={category.subcategory.map((item) => item)}
                />
              ))}
          </div>
        )}
      </div>

      {/* For Desktop and Tablet */}
      <div className="hidden md:flex md:flex-row">
        {categories
          .sort(
            (a, b) =>
              new Date(a._createdAt).getTime() -
              new Date(b._createdAt).getTime()
          )
          .map((category) => (
            <NavbarContent
              key={category._id}
              name={category.name}
              categorySlug={`/${category.slug}`}
              subcategories={category.subcategory.map((item) => item)}
            />
          ))}
      </div>
    </div>
  );
};

export default Navbar;
