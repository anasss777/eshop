"use client";

import ProductCard from "@/components/ProductCard";
import ProductImg from "@/components/ProductImg";
import ProductOptions from "@/components/ProductOptions";
import { getProducts } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";
import findSimilarProducts from "@/utils/findSimilarProducts";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  params: { product: string };
};

const Product = ({ params }: Props) => {
  const slug = params.product;
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      setCurrentProduct(
        products.filter((elements) => elements?.slug == slug)[0]
      );
      if (currentProduct) {
        setSimilarProducts(findSimilarProducts(currentProduct, products));
      }
    };

    fetchData();
  }, [currentProduct, products, slug]);

  if (!currentProduct) {
    return (
      <div className="mt-20 flex flex-col justify-center font-mcLaren text-gray-700">
        <p className="text-8xl text-center">Loading...</p>
        <Image
          src="/loading.png"
          alt="Laoding"
          width={300}
          height={300}
          className="my-24 flex justify-center mx-auto animate-spin"
        />
      </div>
    );
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

      {/* Similar products */}
      <div className="bg-gradient-to-t from-blue-400 to-blue-200 flex flex-col h-fit w-full pt-10">
        <div className="flex mx-auto mb-10">
          <h1 className="font-montserrat text-gray-600 text-3xl font-semibold">
            Similar Products
          </h1>
        </div>

        <div className="flex overflow-x-scroll scroll-smooth lg:overflow-x-hidden lg:mx-auto lg:grid lg:grid-cols-3 lg:grid-rows-1">
          {similarProducts.slice(0, 3).map((product) => (
            <ProductCard
              key={product._id}
              imgsrc={product?.image[0]}
              title={product?.name}
              price={product?.price}
              slug={`/${product?.category?.slug}/${product?.subcategory.slug}/${product?.slug}`}
              currentProduct={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
