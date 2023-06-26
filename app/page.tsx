import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <NavbarMobile />
      <Navbar />
    </div>
  );
}
