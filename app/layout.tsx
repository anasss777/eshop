/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";

export const metadata = {
  title: "E-Shop",
  description:
    "Welcome to our E-Shop! Discover a wide range of smartphones, laptops, tablets, gaming accessories, phone accessories, and smartwatches. Shop with ease and security, thanks to our user-friendly interface and secure checkout process.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=McLaren&family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}