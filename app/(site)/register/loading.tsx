import Image from "next/image";

const Loading = () => {
  return (
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
  );
};

export default Loading;
