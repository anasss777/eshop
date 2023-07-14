import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="relative h-80 w-full flex justify-center bg-gradient-to-b from-blue-300 to-gray-200 shadow-shadowing md:px-0
    px-10"
    >
      <div className="grid grid-cols-1 grid-rows-3">
        <div className="grid grid-cols-3 grid-rows-2 h-[150px] md:w-[800px] mt-10">
          <Image
            width={100}
            height={100}
            className="footerImg md:h-24 md:w-24 h-12 w-12"
            src="/quality.png"
            alt="Quality logo"
          />
          <Image
            width={100}
            height={100}
            className="footerImg md:h-24 md:w-24 h-12 w-12"
            src="/secure-shield.png"
            alt="Security logo"
          />
          <Image
            width={100}
            height={100}
            className="footerImg md:h-24 md:w-24 h-12 w-12"
            src="/global-distribution.png"
            alt="Global distribution logo"
          />

          <p className="footerText md:top-7 text-center">High Quality</p>
          <p className="footerText md:top-7 text-center">Secure Payment</p>
          <p className="footerText md:top-7 text-center">Global Shipping</p>
        </div>

        <div className="grid grid-cols-5 grid-rows-1 relative top-[150px] h-8 mx-auto gap-2">
          {/* Facebook logo */}
          <Link
            href="https://www.facebook.com/annous.shammam?mibextid=ZbWKwL"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              width={30}
              height={30}
              className="footerSocial"
              src="/facebook.png"
              alt="Facebook logo"
            />
          </Link>
          {/* Twitter logo */}
          <Link
            href="https://twitter.com/AnasChammem?t=NZlM6K5W4Ykl1v2gUDWNww&s=35"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              width={30}
              height={30}
              className="footerSocial"
              src="/twitter.png"
              alt="Twitter logo"
            />
          </Link>
          {/* Instagram logo */}
          <Link
            href="https://instagram.com/anaschammam?igshid=NGExMmI2YTkyZg=="
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              width={30}
              height={30}
              className="footerSocial"
              src="/instagram.png"
              alt="Instagram logo"
            />
          </Link>
          {/* Whatsapp logo */}
          <Link
            href="https://wa.me/qr/OIEQI2RBQ3DID1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              width={30}
              height={30}
              className="footerSocial"
              src="/whatsapp.png"
              alt="Whatsapp logo"
            />
          </Link>
          {/* Telegram logo */}
          <Link
            href="https://t.me/anaschammam"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              width={30}
              height={30}
              className="footerSocial"
              src="/telegram.png"
              alt="Telegram logo"
            />
          </Link>
        </div>

        {/* copyright */}
        <p className="text-gray-400 mx-auto h-6 relative top-[83px] md:text-base text-xs font-montserrat">
          Copyright © 2023 Anas Chammam
        </p>
      </div>
    </div>
  );
};

export default Footer;
