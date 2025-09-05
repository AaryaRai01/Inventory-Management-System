// src/app/page.tsx
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Product } from '@/types';
import ProductList from '@/components/ProductList';
import AddProductForm from '@/components/AddProductForm';

// A simple SVG icon component for the header
const BoxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-sky-400">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
        <path d="m3.3 7 8.7 5 8.7-5"></path>
        <path d="M12 22V12"></path>
    </svg>
);

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <header className="mb-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
                <BoxIcon />
                <div>
                    <h1 className="text-2xl font-bold text-white">Inventory Dashboard</h1>
                    <p className="text-sm text-slate-400">Manage and track your products with ease.</p>
                </div>
            </div>
        </header>

        {/* Add Product Section */}
        <section className="mb-8">
          <AddProductForm onProductAdded={fetchProducts} />
        </section>

        {/* Products List Section */}
        <section>
          {loading ? (
            <div className="text-center text-slate-400 py-10">Loading products...</div>
          ) : (
            <ProductList products={products} onProductChange={fetchProducts} />
          )}
        </section>
      </div>
    </main>
  );
}