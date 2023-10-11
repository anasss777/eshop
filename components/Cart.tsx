"use client";

import Image from "next/image";
import React from "react";
import { useStateContext } from "@/context/stateContext";
import { Product } from "@/types/Product";
import Link from "next/link";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    showCart,
    setShowCart,
    setCartItems,
    removeFromCart,
  } = useStateContext();

  const handleQuantityChange = (product: Product, quantity: number) => {
    if (quantity > 0) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.product === product ? { ...cartItem, quantity } : cartItem
      );
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div>
      <div className="float-right">
        <Image
          src="/cart.png"
          alt="cart"
          height={1}
          width={25}
          className="object-scale-down invert-[90%] float-right py-2 mr-4 h-auto w-auto"
          onClick={() => setShowCart(!showCart)}
        />
        <p
          className="relative flex justify-center items-center z-30 left-[45px] rounded-full bg-red-600 text-white font-mcLaren
        text-[10px] h-4 w-4"
        >
          {cartItems.length}
        </p>
      </div>

      {/* Cart menu */}
      {showCart &&
        (cartItems.length == 0 ? (
          // Empty cart
          <div
            className="relative flex flex-col justify-center items-center w-[285px] h-[400px] float-right mr-[147px] bg-gray-200 rounded-md
          shadow-md z-30 -top-3"
          >
            <button
              className="relative left-[125px] top-[-5px] flex justify-center items-center rounded-full h-5 w-5 pb-1 font-mcLaren bg-gray-600
              shadow-lightShadowing hover:scale-110 duration-300 transition-all ease-linear"
              onClick={() => setShowCart(false)}
            >
              x
            </button>
            <p className="text-3xl font-montserrat text-center w-40 text-gray-600 font-bold">
              You cart is empty!
            </p>
            <Image
              src="/empty-cart.png"
              alt="Empty cart"
              width={400}
              height={400}
            />
          </div>
        ) : (
          <div className="relative flex flex-col w-[285px] float-right mr-[147px] -top-3 bg-gray-200 rounded-md shadow-md z-30">
            {/* Close button */}
            <button
              className="relative left-[260px] top-[4px] flex justify-center items-center rounded-full h-5 w-5 pb-1 mb-1 font-mcLaren
              bg-gray-600 shadow-lightShadowing hover:scale-110 duration-300 transition-all ease-linear"
              onClick={() => setShowCart(false)}
            >
              x
            </button>

            {/* Cart content */}
            {cartItems.map((item) => (
              <div
                key={item.product._id}
                className="py-5 px-3 h-[75px] font-montserrat font-bold shadow-md"
              >
                <Image
                  src={String(item.product.image[0])}
                  alt={item.product.name}
                  width={25}
                  height={25}
                  className="pr-2 h-auto w-auto object-scale-down"
                />
                <span className="relative top-[-40px] left-[45px]">
                  {item.product.name}
                  <br />
                  {`$${
                    Math.floor(item.product.price * item.quantity * 100) / 100
                  }`}
                </span>

                <div className="relative top-[-64px] left-[170px] justify-center items-center flex w-[85px] h-6">
                  {/* Decrease quantity button */}
                  <button
                    onClick={() =>
                      item.quantity > 1
                        ? decreaseQuantity(item.product)
                        : removeFromCart(item.product)
                    }
                    className="rounded-full bg-blue-700 h-6 w-6 font-extrabold font-mcLaren hover:bg-blue-500 transition-all duration-300
                    ease-linear text-white"
                  >
                    {" "}
                    -{" "}
                  </button>

                  {/* Quantity input */}
                  <input
                    onChange={(e) =>
                      handleQuantityChange(item.product, Number(e.target.value))
                    }
                    value={item.quantity}
                    className="w-5 h-5 rounded-md text-black font-mcLaren font-light text-center mx-1"
                  />

                  {/* Increase quantity button */}
                  <button
                    onClick={() => increaseQuantity(item.product, 1)}
                    className="rounded-full bg-blue-700 h-6 w-6 font-extrabold font-mcLare hover:bg-blue-500 transition-all duration-300
                    ease-linear text-white"
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
            ))}
            <div className="flex flex-row py-5 px-3 h-[50px] font-montserrat font-bold text-gray-200 shadow-md justify-center items-center">
              <Link href="/cart">
                <button
                  className="bg-blue-400 rounded-full px-3 py-1 mr-1 shadow-lightShadowing hover:shadow-shadowing hover:scale-105
               hover:bg-blue-500 duration-300 transition-all ease-linear"
                  onClick={() => setShowCart(false)}
                >
                  View Cart
                </button>
              </Link>
              <Link href="/success">
                <button
                  className="bg-blue-400 rounded-full px-3 py-1 ml-1 shadow-lightShadowing hover:shadow-shadowing hover:scale-105
               hover:bg-blue-500 duration-300 transition-all ease-linear"
                  onClick={() => setShowCart(false)}
                >
                  Check out
                </button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
