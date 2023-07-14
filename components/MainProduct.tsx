import { getProducts } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MainProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* For tablet and desktop  */}
      <div
        className="bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 w-full justify-center items-center md:px-3 md:py-20 md:h-auto
        md:grid md:grid-cols-2 mx-auto hidden"
      >
        {/* Product Image */}
        <div className="flex items-center justify-end">
          <Image
            src={products[0]?.image[0] || "/image.gif"}
            alt="Main Product"
            height={430}
            width={430}
          />
        </div>

        {/* Details of the product*/}
        <div className="md:flex md:flex-col md:gap-5 md:pl-10 lg:pl-10 justify-center">
          <Link
            href={`${products[0]?.category.slug}/${products[0]?.subcategory.slug}/${products[0]?.slug}`}
          >
            <button
              className="bg-blue-200 text-gray-500 text-2xl font-montserrat rounded-md border-2 border-blue-500 shadow-lightShadowing
       px-6 py-1 w-fit hover:shadow-shadowing hover:bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500 hover:text-white
       hover:font-bold hover:scale-105 duration-300 transition-all ease-linear"
            >
              Buy Now
            </button>
          </Link>
          <p
            className="text-4xl font-montserrat font-semibold pb-1 w-80 bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500
          bg-clip-text text-transparent"
          >
            {products[0]?.name || "Loading..."}
          </p>
          {products[0] && (
            <p
              className="text-lg font-montserrat font-bold text-center w-fit bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500
            bg-clip-text text-transparent"
            >
              Starting from ${products[0]?.price}
            </p>
          )}
        </div>
      </div>

      {/* For mobile */}
      <div
        className="bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 w-full h-auto flex flex-col gap-10 justify-center items-center
    px-3 py-20 md:h-auto md:hidden"
      >
        <p
          className="text-2xl font-montserrat font-semibold text-center w-fit bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500
          bg-clip-text text-transparent"
        >
          {products[0]?.name || "Loading..."}
        </p>
        <Image
          src={products[0]?.image[0] || "/image.gif"}
          alt="Main Product"
          height={250}
          width={250}
        />
        {products[0] && (
          <p
            className="text-lg font-montserrat font-bold text-center w-fit bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500
            bg-clip-text text-transparent"
          >
            Starting from ${products[0]?.price}
          </p>
        )}
        <button
          className="bg-blue-200 text-gray-500 text-2xl font-montserrat rounded-md border-2 border-blue-500 shadow-lightShadowing
       px-4 py-1 hover:shadow-shadowing hover:bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500 hover:text-white
       hover:font-bold hover:scale-105 duration-300 transition-all ease-linear"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default MainProduct;
