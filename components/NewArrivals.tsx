import React, { useEffect, useState } from "react";
import { Product } from "@/types/Product";
import ProductCard from "./ProductCard";
import { getProductsDesc } from "@/sanity/sanity-utils";

const NewArrivals = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsDesc();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gradient-to-t from-blue-400 to-blue-200 flex flex-col h-fit w-full pt-10">
      <div className="flex mx-auto mb-10">
        <h1 className="font-montserrat text-gray-600 text-3xl font-semibold">
          New Arrivals
        </h1>
      </div>

      <div className="flex overflow-x-scroll scroll-smooth lg:overflow-x-hidden lg:mx-auto lg:grid lg:grid-cols-3 lg:grid-rows-1">
        {products.slice(0, 3).map((product) => (
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
  );
};

export default NewArrivals;
