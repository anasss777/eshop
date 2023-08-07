"use client";

import ElementCard from "@/components/ElementCard";
import { getCategory, getSubcategories } from "@/sanity/sanity-utils";
import { Category } from "@/types/Category";
import { Subcategory } from "@/types/Subcategory";
import React, { useEffect, useState } from "react";

type Props = {
  params: { category: string };
};

const Category = ({ params }: Props) => {
  const slug = params.category;
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [categoty, setCategoty] = useState<Category>();
  const [filterdSubcategory, setFilterdSubcategory] = useState<Subcategory[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const subcategoriesData = await getSubcategories();
      const categoryData = await getCategory(slug);
      setCategoty(categoryData);
      setSubcategories(subcategoriesData);
      setFilterdSubcategory(
        subcategories.filter((elements) => elements.category?.slug == slug)
      );
    };

    fetchData();
  }, [slug, subcategories]);

  return (
    <div className="flex flex-col px-10 pb-16">
      <p className="pt-10 md:flex justify-center text-center text-4xl font-montserrat text-gray-600">
        {categoty?.name}
      </p>
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 flex-col justify-center items-center">
        {filterdSubcategory.map((item) => (
          <ElementCard
            key={item._id}
            name={item.name}
            ImgSrc={item.image}
            slug={`${item.category.slug}/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
