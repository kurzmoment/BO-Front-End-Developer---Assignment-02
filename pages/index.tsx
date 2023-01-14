import Navbar from "@/components/Navbar";
import RecomendedProduct from "@/components/RecomendedProduct";
import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <RecomendedProduct />
    </>
  );
}
