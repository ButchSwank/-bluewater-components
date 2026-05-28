"use client";

import React, { useEffect } from "react";
import { X, Clock, Package } from "lucide-react";
import { Product } from "@/lib/types";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div 
        className="modal bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-72 object-cover" 
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/95 hover:bg-white p-2 rounded-full shadow text-navy-900 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-4 px-4 py-1.5 bg-white rounded-full text-sm font-semibold shadow">
            {product.category}
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="uppercase tracking-[2px] text-xs font-bold text-blue-600 mb-2">{product.manufacturer}</div>
          <h2 className="text-3xl font-semibold tracking-tighter text-navy-900 pr-6">{product.name}</h2>
          
          <div className="flex flex-wrap gap-3 mt-5">
            <div className="inline-flex items-center rounded-full bg-silver-100 px-4 py-1 text-sm text-navy-700">
              <Package size={15} className="mr-2" /> SKU: {product.sku}
            </div>
            <div className="inline-flex items-center rounded-full bg-silver-100 px-4 py-1 text-sm text-navy-700">
              <Clock size={15} className="mr-2" /> Lead Time: {product.leadTime}
            </div>
          </div>

          <div className="mt-7 text-[15px] leading-relaxed text-silver-600">
            {product.description}
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-sm tracking-wider text-navy-900 mb-3">KEY SPECIFICATIONS</h4>
            <div className="bg-silver-50 border border-silver-200 rounded-2xl px-6 py-5 font-mono text-sm text-navy-800 whitespace-pre-wrap">
              {product.specs}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a 
              href="#contact" 
              onClick={onClose}
              className="btn-primary flex-1 text-center text-white py-4 rounded-2xl font-semibold"
            >
              Request Pricing &amp; Samples
            </a>
            <button 
              onClick={onClose}
              className="btn-secondary flex-1 py-4 rounded-2xl font-semibold text-navy-900 hover:bg-silver-50"
            >
              Close
            </button>
          </div>

          <p className="text-center text-xs text-silver-400 mt-6">
            All parts are sourced from authorized distributors. RoHS &amp; REACH compliant where applicable.
          </p>
        </div>
      </div>
    </div>
  );
}
