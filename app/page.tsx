"use client";
import ProductGrid from "../components/ProductGrid";
import React, { useState } from "react";
import Header from "../components/Header";
import CategoryMenu from "../components/CategoryMenu";

export default function Page() {
  const [productCount, setProductCount] = useState<number>(0);
  return (
    <main className="min-h-screen bg-black">
      <div className="bg-[#0c0c0c] px-4  max-w-8xl mx-auto pt-4">
        <Header />
        <CategoryMenu />
        <div className="flex items-center justify-between px-4 mb-4">
          <div className="text-gray-200 tracking-widest">Bags • Backpacks</div>
          <div className="text-gray-200 flex items-center gap-2 tracking-widest">
            {productCount} products{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19 23"
              className="w-5 h-5 text-gray-400"
            >
              <path
                d="M1 10.7805V22H17.6667V10.7805M9.33333 15.6585V2M9.33333 2L14.75 7.41667M9.33333 2L3.91667 7.41667"
                stroke="#E5DFD9"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <ProductGrid setProductCount={setProductCount} />
      </div>
    </main>
  );
}
