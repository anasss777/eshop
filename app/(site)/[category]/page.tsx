"use client";

import { getSubcategories } from "@/sanity/sanity-utils";
import { Subcategory } from "@/types/Subcategory";
import React, { useEffect, useState } from "react";

type Props = {
  params: { category: string };
};

const Category = ({ params }: Props) => {
  const slug = params.category;
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [filterdSubcategory, setFilterdSubcategory] = useState<Subcategory[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const subcategoriesData = await getSubcategories();
      setSubcategories(subcategoriesData);
      setFilterdSubcategory(
        subcategories.filter((elements) => elements.category?.slug == slug)
      );
    };

    fetchData();
  }, [slug, subcategories]);

  return <div>{filterdSubcategory.map((item) => item.name)}</div>;
};

export default Category;
