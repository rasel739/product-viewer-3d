'use client';
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/constants/products';
import { CgSearch } from 'react-icons/cg';

const SearchQuery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const results = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return products.filter(
      (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className='relative w-full max-w-md'>
      {/* Input */}
      <label className='relative block'>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search products...'
          className='w-full border border-violet-400 rounded-xl px-4 text-slate-800 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-violet-600 shadow-sm'
        />
        <div className='absolute right-3 top-1/2 -translate-y-1/2'>
          <CgSearch className='w-5 h-5 text-gray-400' />
        </div>
      </label>

      {/* Results */}
      {searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className='absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-30'
        >
          {results.length === 0 ? (
            <p className='p-3 text-sm text-gray-500'>No products found.</p>
          ) : (
            <ul className='divide-y divide-gray-100'>
              {results.map((p) => (
                <li
                  key={p.id}
                  className='p-3 hover:bg-gray-50 transition flex items-center justify-between cursor-pointer'
                >
                  <div>
                    <div className='text-sm font-medium text-gray-800'>{p.title}</div>
                    <div className='text-xs text-gray-500'>${p.price}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default SearchQuery;
