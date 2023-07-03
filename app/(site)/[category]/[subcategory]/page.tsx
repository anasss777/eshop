"use client";

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

  return <div>{filterdProducts.map((item) => item.name)}</div>;
};

export default Subcategory;
