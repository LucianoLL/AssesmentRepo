"use client"

import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-8 gap-16 sm:p-20">
      <ProductGrid />
    </div>
  );
}
