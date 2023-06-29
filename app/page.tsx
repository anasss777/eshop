"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import { getProducts } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";

export default function Home() {
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
      {/* Header */}
      <Header />

      {/* Navbar */}
      <NavbarMobile />
      <Navbar />

      <div>{products[0].name}</div>
    </div>
  );
}
