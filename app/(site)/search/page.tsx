"use client";

import ElementCard from "@/components/ElementCard";
import { getProducts } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";
import handleSearch from "@/utils/HandleSearch";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Search = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const [products, setProducts] = useState<Product[]>([]);
  const [searchResult, setSearchResult] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setSearchResult(handleSearch(encodedSearchQuery, products));
    };

    fetchData();
  }, [encodedSearchQuery, products]);

  return (
    <div className="flex flex-col px-10 pb-16">
      <p className="pt-10 md:flex justify-center text-center text-4xl font-montserrat text-gray-600">
        Search results for:&nbsp;{" "}
        <strong>{searchQuery?.toLocaleLowerCase()}</strong>
      </p>

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 flex-col justify-center items-center">
        {searchResult.map((product) => (
          <ElementCard
            key={product._id}
            name={product.name}
            ImgSrc={product.image[0]}
            slug={`/${product.category.slug}/${product.subcategory.slug}/${product.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
