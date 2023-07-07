import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  ImgSrc: string;
  slug: string;
};

const ElementCard = (props: Props) => {
  return (
    <div className="relative top-10 w-fit">
      <Link href={props.slug}>
        <button
          className="relative border-2 border-solid border-blue-400 w-96 h-64 rounded-xl p-1 mx-4 group hover:scale-[1.03] duration-300
    ease-linear transition-all"
        >
          <Image
            className="rounded-xl w-[374px] h-[245px] group-hover:blur-[3px] object-scale-down"
            src={props.ImgSrc}
            width={500}
            height={500}
            alt={props.name}
          />
          <div className="absolute inset-0 flex items-center justify-center text-[50px] font-bold font-montserrat -z-10 group-hover:z-10">
            <p className="bg-white group-hover:bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500 bg-clip-text text-transparent">
              {props.name}
            </p>
          </div>
        </button>
        <p className="relative top-5 left-5 font-montserrat text-[27px]">
          <span className="font-mcLaren text-blue-400">|</span>
          {props.name}
        </p>
      </Link>
    </div>
  );
};

export default ElementCard;
