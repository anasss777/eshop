"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";

const SearchBar = () => {
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

  return (
    <div className="hidden md:block top-[5px] mx-auto w-full h-9 relative col-span-2">
      <form onSubmit={handleSearch}>
        <Image
          src="/loupe.png"
          alt="search logo"
          height={25}
          width={25}
          className="hidden md:block relative top-[1px] left-[3px] z-10 h-auto w-auto"
        />
        <input
          value={searchQuery || ""}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="hidden md:block relative top-[-32px] mx-auto w-full h-9 rounded-full px-10 font-montserrat focus:border-2
        focus:border-blue-500 outline-none"
          placeholder="Search..."
        />

        <button
          className="hidden md:block bg-blue-500 relative right-[3px] top-[-64.5px] float-right text-white font-montserrat px-3 py-[3px] font-bold
        rounded-full"
          onClick={() => handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
