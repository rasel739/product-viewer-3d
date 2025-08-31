import NotFoundClient from '@/components/sub/SearchQuery';
import { products } from '@/constants/products';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  const recommended = products.slice(0, 3);

  return (
    <main className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6'>
      <div className='max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        {/* Left: Illustration & text */}
        <section className='bg-white rounded-2xl p-8 shadow-xl'>
          <div className='flex items-center gap-4'>
            <div className='w-16 h-16 rounded-lg bg-gradient-to-tr from-indigo-600 to-blue-400 flex items-center justify-center text-white text-2xl font-bold'>
              404
            </div>
            <div>
              <h1 className='text-2xl font-bold text-indigo-700'>Page not found</h1>
              <p className='text-gray-600 mt-1'>
                Sorry — the page you are looking for doesn’t exist.
              </p>
            </div>
          </div>

          <div className='mt-6'>
            <NotFoundClient />
          </div>

          <div className='mt-6 flex gap-3'>
            <Link
              href='/'
              className='inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition'
            >
              Go to Home
            </Link>
          </div>
        </section>

        <aside className='bg-white rounded-2xl p-6 shadow-lg'>
          <h3 className='text-lg font-semibold text-indigo-700'>You might like</h3>
          <div className='mt-4 grid grid-cols-1 gap-3'>
            {recommended.map((p) => (
              <div
                key={p.id}
                className='flex items-center gap-4 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition'
              >
                <div className='w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-500'>
                  3D Preview
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-between'>
                    <h4 className='text-sm font-medium text-gray-800'>{p.title}</h4>
                    <span className='text-sm text-blue-600 font-semibold'>{p.price}</span>
                  </div>
                  <p className='text-xs text-gray-500 mt-1 line-clamp-2'>{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className='text-xs text-gray-400 mt-4'>Try searching for product name</p>
        </aside>
      </div>
    </main>
  );
};

export default NotFound;
