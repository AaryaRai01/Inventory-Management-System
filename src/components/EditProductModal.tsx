// src/components/EditProductModal.tsx
"use client";

import { useState, FormEvent, useEffect } from 'react';
import { Product } from '@/types';

type EditProductModalProps = {
  product: Product;
  onClose: () => void;
  onProductUpdated: () => void;
};

export default function EditProductModal({ product, onClose, onProductUpdated }: EditProductModalProps) {
  const [formData, setFormData] = useState<Product>(product);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const updatedProduct = {
      name: formData.name,
      price: parseFloat(String(formData.price)),
      quantity: parseInt(String(formData.quantity), 10),
      category: formData.category,
    };

    try {
      const response = await fetch(`/api/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) throw new Error('Failed to update product');
      onProductUpdated();

    } catch (error) {
      console.error(error);
      alert('Error updating product.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-slate-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-slate-700">
        <h2 className="text-2xl font-semibold mb-6 text-white">Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="edit-name" className="text-sm font-medium text-slate-400 mb-1 block">Name</label>
              <input id="edit-name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition" required />
            </div>
            <div>
              <label htmlFor="edit-price" className="text-sm font-medium text-slate-400 mb-1 block">Price</label>
              <input id="edit-price" name="price" type="number" value={formData.price} onChange={handleChange} className="w-full bg-slate-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition" required />
            </div>
            <div>
              <label htmlFor="edit-quantity" className="text-sm font-medium text-slate-400 mb-1 block">Quantity</label>
              <input id="edit-quantity" name="quantity" type="number" value={formData.quantity} onChange={handleChange} className="w-full bg-slate-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition" required />
            </div>
            <div>
              <label htmlFor="edit-category" className="text-sm font-medium text-slate-400 mb-1 block">Category</label>
              <input id="edit-category" name="category" value={formData.category} onChange={handleChange} className="w-full bg-slate-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition" />
            </div>
          </div>
          <div className="flex justify-end mt-8 space-x-4">
            <button type="button" onClick={onClose} className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md transition-colors disabled:bg-slate-500">
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}