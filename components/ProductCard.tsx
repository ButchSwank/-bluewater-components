"use client";

import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <button
      onClick={() => onClick(product)}
      className="product-card group card bg-white rounded-2xl overflow-hidden text-left w-full flex flex-col focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-4"
    >
      <div className="relative h-44 bg-silver-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur text-xs font-medium rounded-full text-navy-900 shadow-sm">
          {product.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-auto">
          <div className="text-xs tracking-[1px] font-semibold text-blue-600 mb-1.5">{product.manufacturer}</div>
          <h3 className="font-semibold text-[17px] leading-tight tracking-tight text-navy-900 mb-3 pr-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-silver-500 text-sm line-clamp-2 mb-4">{product.description}</p>
        </div>

        <div className="flex items-center justify-between pt-4 mt-auto border-t border-silver-100 text-sm">
          <div className="flex items-center gap-1.5 text-silver-500">
            <Clock size={15} />
            <span>{product.leadTime}</span>
          </div>
          <div className="flex items-center gap-1 text-blue-600 font-medium group-hover:gap-2 transition-all">
            Details <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </button>
  );
}
