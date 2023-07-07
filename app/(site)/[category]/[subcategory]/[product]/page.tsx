"use client";

import { getProducts } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";
import React, { useEffect, useState } from "react";

type Props = {
  params: { product: string };
};

const Product = ({ params }: Props) => {
  const slug = params.product;
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product>();

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      setCurrentProduct(
        products.filter((elements) => elements?.slug == slug)[0]
      );
    };

    fetchData();
  }, [products, slug]);

  if (!currentProduct) {
    return <p>Product is deleted</p>;
  }

  return <div>{currentProduct.name}</div>;
};

export default Product;
