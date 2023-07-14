"use client";

import ProductImg from "@/components/ProductImg";
import ProductOptions from "@/components/ProductOptions";
import { getProducts } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";
import { PortableText } from "@portabletext/react";
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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="md:grid grid-cols-2">
        <ProductImg imagesArray={currentProduct.image} />
        <ProductOptions
          productName={currentProduct.name}
          productPrice={currentProduct.price}
          currentProduct={currentProduct}
        />
      </div>

      {/* Product's description */}
      <div className="bg-gradient-to-t from-gray-50 to-gray-400 w-full h-fit pb-10 px-[10%] md:px-[20%] lg:px-[30%]">
        <p className="text-4xl text-gray-600 font-montserrat py-4">
          Description
        </p>
        <PortableText value={currentProduct.details} />
      </div>
    </div>
  );
};

export default Product;
