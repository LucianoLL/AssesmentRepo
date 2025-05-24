"use client"

import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <div className="flex justify-center p-8">

      <div>
        <div className="columns-2 pb-8">
          <h1 className='text-3xl font-sans font-bold'>Products</h1>

        </div>
        <ProductGrid />
      </div>
      
    </div>
  );
}
