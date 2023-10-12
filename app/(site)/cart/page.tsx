"use client";

import { useStateContext } from "@/context/stateContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const {
    cartItems,
    setCartItems,

    increaseQuantity,
    decreaseQuantity,
    handleQuantityChange,

    removeFromCart,
  } = useStateContext();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const delay = 3000;

    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const itemTotalPrice = cartItems.map(
      (item) => item.product.price * item.quantity
    );
    setTotalPrice(
      itemTotalPrice.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
  }, [cartItems]);

  return (
    <div className="relative top-12 flex-grow pb-20">
      <div className="flex flex-row justify-center items-center">
        <Image
          src="/cart.png"
          alt="Cart Logo"
          height={35}
          width={35}
          className="invert-[.25]"
        />
        <p className="ml-2 text-3xl font-montserrat text-gray-600">My Cart</p>
      </div>

      {cartItems.length > 0 ? (
        <div className="flex flex-col -mb-80">
          <div className="relative top-10 h-[600px] lg:w-[40%] mx-auto">
            <div className="grid grid-rows-1 grid-cols-2 gap-10 px-8 py-8 rounded-md mx-8 shadow-lightShadowing bg-blue-100">
              <div className="flex flex-col justify-start">
                <p className="font-montserrat">Shipping Cost</p>
                <p className="font-montserrat">Discount</p>
                <p className="font-montserrat">Tax</p>
                <p className="font-montserrat font-bold">Total Price</p>
              </div>

              <div className="flex flex-col justify-end items-end ml-[70%]">
                <p className="font-montserrat">TBD</p>
                <p className="font-montserrat">$0</p>
                <p className="font-montserrat">TBD</p>
                <p className="font-montserrat font-bold">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full mx-auto">
              <Link href="/success">
                <button
                  className="relative -top-4 flex justify-center text-white bg-blue-400 rounded-md px-5 font-montserrat
                  py-1 font-bold text-xl shadow-lightShadowing hover:shadow-shadowing hover:scale-105 duration-300 transition-all ease-linear"
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>

          {/* Cart Item Info */}
          <div className="flex-grow relative -top-80 w-2/3 mx-auto">
            {cartItems.map((cartItem) => (
              <div key={cartItem.product._id}>
                <div className="flex lg:flex-row flex-col items-center text-center mx-auto shadow-md">
                  <Image
                    src={cartItem.product.image[0]}
                    alt={cartItem.product.name}
                    height={300}
                    width={300}
                    className="object-scale-down p-10"
                  />

                  <div className="grid grid-rows-3 grid-cols-1 gap-10 ml-1 w-full h-64 justify-center items-center">
                    <p className="relative lg:top-9 -top-9 font-montserrat text-xl md:text-2xl lg:text-3xl font-bold text-gray-600">
                      {cartItem.product.name}
                    </p>

                    <div className="flex flex-row justify-center items-center w-[65%] mx-auto relative">
                      <p className="relative font-mcLaren text-lg md:text-xl lg:text-2xl text-gray-600">
                        <span className="font-montserrat">Each</span> $
                        {cartItem.product.price}
                      </p>

                      {/* Set quantity */}
                      <div className="relative flex flex-row justify-center items-center w-36">
                        {/* Decrease quantity button */}
                        <button
                          onClick={() =>
                            cartItem.quantity > 1
                              ? decreaseQuantity(cartItem.product)
                              : removeFromCart(cartItem.product)
                          }
                          className="mx-1 rounded-full bg-blue-700 h-7 w-7 md:h-9 md:w-9 font-extrabold font-mcLaren text-[17px]
                          hover:bg-blue-500 transition-all duration-300 ease-linear text-white"
                        >
                          {" "}
                          -{" "}
                        </button>

                        {/* Quantity input */}
                        <input
                          onChange={(event) =>
                            +event.target.value > 0
                              ? handleQuantityChange(
                                  cartItem.product,
                                  +event.target.value
                                )
                              : handleQuantityChange(cartItem.product, 1)
                          }
                          value={cartItem.quantity}
                          className="mx-1 w-7 h-7 md:w-9 md:h-9 rounded-lg md:rounded-lg lg:rounded-xl text-lg text-black font-mcLaren
                          text-center border-2 border-blue-700"
                        />

                        {/* Increase quantity button */}
                        <button
                          onClick={() => increaseQuantity(cartItem.product, 1)}
                          className="mx-1 rounded-full bg-blue-700 h-7 w-7 md:h-9 md:w-9 font-extrabold font-mcLaren text-[17px]
                          hover:bg-blue-500 transition-all duration-300 ease-linear text-white"
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>

                      <p className="relative font-mcLaren text-lg md:text-xl lg:text-2xl text-gray-600">
                        <span className="font-montserrat">Total</span> $
                        {Math.floor(
                          cartItem.product.price * cartItem.quantity * 100
                        ) / 100}
                      </p>
                    </div>

                    {/* Remove an item from Cart */}
                    <button
                      className="relative rounded-md bg-red-500 py-1 px-5 text-white font-montserrat font-bold w-fit h-fit
                        bottom-10 shadow-lightShadowing hover:shadow-shadowing hover:scale-105 duration-300 transition-all
                        ease-linear mx-auto"
                      onClick={() => removeFromCart(cartItem.product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center my-10 w-full">
              <button
                className="bg-red-500 px-5 py-1 rounded-md text-white font-montserrat font-bold shadow-lightShadowing 
            hover:shadow-shadowing hover:scale-105 duration-300 transition-all ease-linear"
                onClick={() => {
                  setCartItems([]);
                  localStorage.clear();
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ) : showContent ? (
        <div className="flex flex-col w-full">
          <p className="flex justify-center mt-10 font-montserrat text-5xl text-gray-600 text-center">
            Your cart is empty
          </p>
          <Link href="/">
            <p className="flex justify-center mt-5 w-max mx-auto text-4xl font-montserrat text-gray-600 underline hover:text-blue-400">
              return to main page
            </p>
          </Link>
          <div className="flex justify-center">
            <Image
              src="/empty-cart.png"
              alt="Empty cart"
              width={300}
              height={300}
            />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Cart;
