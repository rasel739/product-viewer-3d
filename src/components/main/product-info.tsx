'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IProductInfo {
  title?: string;
  description?: string;
  price?: string;
  rating?: [];
  totalReviews?: number;
}

const ProductInfo: React.FC<IProductInfo> = ({ title, description, price }) => (
  <AnimatePresence mode='wait'>
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className='bg-white rounded-xl shadow-lg  p-6 mt-6 w-full max-w-md'
    >
      <h2 className='text-2xl font-semibold text-indigo-700'>{title}</h2>
      <p className='text-gray-600 mt-2'>{description}</p>
      <div className='flex items-center justify-between mt-4'>
        <span className='text-xl font-bold text-blue-600'>{price}</span>
        <div>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
            Customer Reviews
          </h3>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);

export default ProductInfo;
