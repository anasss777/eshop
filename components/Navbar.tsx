import React from "react";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  return (
    <div className="hidden md:flex md:flex-row">
      <NavbarContent
        name="Smart Phones"
        brand1="Samsung Phones"
        brand2="iPhone"
        brand3="Xiaomi Phones"
      />
      <NavbarContent name="Laptops" brand1="Mac" brand2="HP" brand3="Lenovo" />
      <NavbarContent
        name="Gaming Accessories"
        brand1="Keyboard"
        brand2="Monitor"
        brand3="Mouse"
      />
      <NavbarContent
        name="Tablets"
        brand1="iPad"
        brand2="Samsung Tables"
        brand3="Xiaomi Tablets"
      />
      <NavbarContent
        name="Phones Accessories"
        brand1="Earphone"
        brand2="Charger"
        brand3="Power Bank"
      />
      <NavbarContent
        name="Smart Watches"
        brand1="Samsung Watches"
        brand2="iPhone watches"
        brand3="Huawei Watches"
      />
    </div>
  );
};

export default Navbar;
