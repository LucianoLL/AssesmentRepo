"use client"

import Image from "next/image";
import ProductAPI from "./components/ProductAPI";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-8 gap-16 sm:p-20">
      <ProductAPI />
    </div>
  );
}
