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
    <div className="flex flex-row justify-center">
      {filterdProducts.map((item) => (
        <ElementCard
          key={item._id}
          name={item.name}
          ImgSrc={item.image[0]}
          slug={`${item.subcategory.slug}/${item.slug}`}
        />
      ))}
    </div>
  );
};

export default Subcategory;
