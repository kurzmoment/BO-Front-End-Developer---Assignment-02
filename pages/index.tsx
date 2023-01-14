import Navbar from "@/components/Navbar";
import RecomendedProduct from "@/components/RecomendedProduct";
import Products from "@/components/Products";
import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <RecomendedProduct />
      <Products />
    </>
  );
}
