"use client";

import ElementCard from "@/components/ElementCard";
import { getProducts } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";
import React, { useEffect, useState } from "react";

type Props = {
  params: { subcategory: string };
};

const Subcategory = ({ params }: Props) => {
  const slug = params.subcategory;
  const [products, setProducts] = useState<Product[]>([]);
  const [filterdProducts, setFilterdProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      setFilterdProducts(
        products.filter((elements) => elements.subcategory?.slug == slug)
      );
    };

    fetchData();
  }, [products, slug]);

  return (
    <div className="flex flex-col px-10 pb-16">
      <p className="pt-10 md:flex justify-center text-center text-4xl font-montserrat text-gray-600">
        {filterdProducts[0]?.subcategory.name}
      </p>
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 flex-col justify-center items-center">
        {filterdProducts.map((item) => (
          <ElementCard
            key={item._id}
            name={item.name}
            ImgSrc={item.image[0]}
            slug={`${item.category.slug}/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Subcategory;
