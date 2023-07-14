import Image from "next/image";
import React, { useState } from "react";

type Props = {
  imagesArray: string[];
};

const ProductImg = (props: Props) => {
  const [mainImg, setMainImg] = useState(0);

  return (
    <div className="w-full md:h-[670px] h-fit pb-12 md:pb-0 bg-gradient-to-br from-blue-300 to-gray-200">
      {/* Product's main image */}
      <div className="relative md:top-10 top-7 flex justify-center items-center mx-auto md:h-[450px] md:w-[450px] h-56 w-56 mb-20">
        <Image
          className="h-auto w-auto object-scale-down"
          src={props.imagesArray[mainImg]}
          alt="Product's main image"
          width={450}
          height={450}
          priority={true}
        />
      </div>

      {/* Product's alt image */}
      <div className="grid grid-cols-5 grid-rows-1 md:w-[550px] w-72 justify-center items-center mx-auto">
        {props.imagesArray.map((img, index) => (
          <Image
            className="cursor-pointer shadow-lightShadowing rounded-xl p-1 md:h-[70px] md:w-[70px] h-12 w-12 object-scale-down bg-blue-200
            mx-auto"
            onMouseEnter={() => setMainImg(index)}
            key={index}
            src={img}
            alt={"Product image" + index}
            width={70}
            height={70}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImg;
