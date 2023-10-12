"use client";

import MainProduct from "@/components/MainProduct";
import NewArrivals from "@/components/NewArrivals";
import TopSellers from "@/components/TopSellers";

export default function Home() {
  return (
    <div>
      <MainProduct />
      <NewArrivals />
      <TopSellers />
    </div>
  );
}
