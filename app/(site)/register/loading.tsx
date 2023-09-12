import Image from "next/image";

const Loading = () => {
  return (
    <div className="mt-10 flex flex-col justify-center font-mcLaren text-gray-700">
      <p className="text-8xl text-center">Loading...</p>
      <Image
        src="/hourglass.gif"
        alt="Laoding"
        width={300}
        height={300}
        className="mt-10 flex justify-center mx-auto"
      />
    </div>
  );
};

export default Loading;
