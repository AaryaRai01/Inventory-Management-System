// src/components/AddProductForm.tsx
"use client";

import { useState, FormEvent } from 'react';
import { Product } from '@/types';

type AddProductFormProps = {
  onProductAdded: () => void;
};

export default function AddProductForm({ onProductAdded }: AddProductFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newProduct: Omit<Product, 'id' | 'created_at'> = { name, price: parseFloat(price), quantity: parseInt(quantity, 10), category };
    try {
      const response = await fetch('/api/products', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newProduct) });
      if (!response.ok) throw new Error('Failed to add product');
      setName(''); setPrice(''); setQuantity(''); setCategory('');
      setIsOpen(false);
      onProductAdded();
    } catch (error) {
      console.error(error); alert('Error adding product.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Add New Product</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors"
          >
            {isOpen ? 'Close' : '+ New'}
          </button>
        </div>

        {isOpen && (
          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Form Fields */}
            <div className="sm:col-span-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-400 mb-1 block">Product Name</label>
              <input id="name" type="text" placeholder="e.g. iPhone 16" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition" required />
            </div>
            <div>
              <label htmlFor="price" className="text-sm font-medium text-slate-400 mb-1 block">Price ($)</label>
              <input id="price" type="number" placeholder="e.g. 999.99" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-slate-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition" required min="0" step="0.01" />
            </div>
            <div>
              <label htmlFor="quantity" className="text-sm font-medium text-slate-400 mb-1 block">Quantity (Stock)</label>
              <input id="quantity" type="number" placeholder="e.g. 100" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full bg-slate-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition" required min="0" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="category" className="text-sm font-medium text-slate-400 mb-1 block">Category</label>
              <input id="category" type="text" placeholder="e.g. Electronics" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-slate-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition" />
            </div>
            
            {/* Submit Button */}
            <div className="sm:col-span-2 flex justify-end">
              <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 disabled:bg-slate-500">
                {isSubmitting ? 'Saving...' : 'Save Product'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}