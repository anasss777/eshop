"useclient";

import { TheContext } from "@/context/stateContext";
import { Product } from "@/types/Product";
import Link from "next/link";
import React, { useContext, useState } from "react";

type Props = {
  productName: string;
  productPrice: number;
  currentProduct: Product;
};

const ProductOptions = (props: Props) => {
  const cartContext = useContext(TheContext);
  const [qty, setQty] = useState(1);

  if (!cartContext) {
    // Handle the case when the context is not yet available
    return null;
  }
  const { addToCart } = cartContext;

  const handleAddToCart = () => {
    addToCart({ product: props.currentProduct, quantity: qty });
  };

  return (
    <div className="relative w-full md:h-[670px] h-fit pb-56 bg-gradient-to-br from-gray-200 to-blue-300 right-0">
      {/* Product's name */}
      <p className="relative md:top-[120px] top-14 text-gray-500 text-[30px] text-center font-montserrat px-12">
        {props.productName}
      </p>

      {/* Product's price */}
      <p className="relative md:top-[135px] top-20 text-[30px] text-gray-600 font-mcLaren font-extrabold text-center">
        ${Math.floor(props.productPrice * qty * 100) / 100}
      </p>

      {/* Set quantity */}
      <div className="relative md:top-[270px] top-32 grid grid-cols-3 grid-rows-1 w-36 text-center mx-auto">
        {/* Decrease quantity button */}
        <button
          onClick={() => qty != 1 && setQty(qty - 1)}
          className="rounded-full bg-blue-700 h-10 w-10 font-extrabold font-mcLaren text-[27px] hover:bg-blue-500 transition-all
            duration-300 ease-linear mx-auto"
        >
          {" "}
          -{" "}
        </button>

        {/* Quantity input */}
        <input
          onChange={(event) =>
            +event.target.value > 0 ? setQty(+event.target.value) : setQty(1)
          }
          value={qty}
          className="w-10 rounded-xl text-black font-mcLaren text-center border-2 border-blue-700 mx-auto"
        />

        {/* Increase quantity button */}
        <button
          onClick={() => setQty(qty + 1)}
          className="rounded-full bg-blue-700 h-10 w-10 font-extrabold font-mcLaren text-[27px] hover:bg-blue-500 transition-all
          duration-300 ease-linear mx-auto"
        >
          {" "}
          +{" "}
        </button>
      </div>

      {/* Buy button and add to cart button */}
      <div
        className="relative md:top-[300px] top-44 grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 w-full mx-auto lg:w-[53%]
        md:w-[71%] text-center"
      >
        {/* Buy button */}
        <Link href="/cart">
          <button
            className="w-fit px-2 my-2 bg-blue-200 rounded-lg shadow-lg font-montserrat text-xl text-[gray] hover:scale-105 mx-auto
            transition-all duration-300 border-2 border-blue-400 py-1"
          >
            Buy Now
          </button>
        </Link>
        {/* Add to cart button */}
        <button
          className="w-fit px-2 my-2 bg-blue-200 rounded-lg shadow-lg font-montserrat text-xl text-[gray] hover:scale-105 mx-auto
          transition-all duration-300 border-2 border-blue-400 py-1"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductOptions;
