import { useStateContext } from "@/context/stateContext";
import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imgsrc: string;
  title: string;
  price: number;
  slug: string;
  currentProduct: Product;
};

const ProductCard = (props: Props) => {
  const { addToCart } = useStateContext();

  const handleAddToCart = () => {
    addToCart({ product: props.currentProduct, quantity: 1 });
  };

  return (
    <div className="mb-40 mx-3">
      <div className="rounded-md p-2 mx-1 hover:shadow-blue-400 hover:shadow-sm hover:scale-105 transition-all duration-300 ease-linear">
        {/* Product image */}
        <div className="h-[250px] w-[290px] overflow-hidden flex justify-center">
          <Link href={props.slug}>
            <Image
              className="flex object-center w-auto h-auto"
              src={props.imgsrc}
              alt={props.title}
              width={200}
              height={200}
            />
          </Link>
        </div>

        {/* Product name */}
        <p className=" relative top-[50px] flex text-[17px] text-gray-500 font-semibold my-4 font-montserrat leading-7">
          {props.title}
        </p>

        {/* Product price */}
        <h1 className="relative top-[80px] flex text-gray-600 text-[19px] my-4 font-mcLaren font-bold">
          ${props.price}
        </h1>

        {/* Add to cart */}
      </div>
      <button
        className="relative top-[90px] flex bg-blue-200 text-blue-400 font-montserrat font-bold w-[95%] mx-auto rounded-md justify-center
        text-center text-[19px] hover:scale-105 hover:bg-blue-400 hover:text-blue-200 transition-all duration-300 ease-linear"
        onClick={handleAddToCart}
      >
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default ProductCard;
