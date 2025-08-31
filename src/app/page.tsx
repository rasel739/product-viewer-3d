'use client';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCachedModel } from '@/lib/modelCache';
import { products } from '@/constants/products';

import Canvas3D from '@/components/main/canvas-3d';
import ProductNavigation from '@/components/main/product-navigation';
import ProductInfo from '@/components/main/product-info';
import QuantitySelector from '@/components/main/quantity-selector';
import ColorPicker from '@/components/main/color-picker';
import ActionButtons from '@/components/sub/ActionButtons';
import { RootState } from '@/redux/store';
import { setActiveIndex, setColor } from '@/redux/slice/productSlice';
import SearchQuery from '@/components/sub/SearchQuery';

export default function Home() {
  const dispatch = useDispatch();
  const { activeIndex, color } = useSelector((state: RootState) => state.product);
  // const { review } = useSelector((state: RootState) => state.review);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await Promise.all(products.map((p) => getCachedModel(p.modelPath)));
      } catch (e) {
        console.warn('Preload failed', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const product = products[activeIndex];
  // const productReviews = review.filter((r) => r.productId === activeIndex);

  return (
    <div className='flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-10'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-2'>
        <div>
          <h1 className='text-3xl font-bold text-indigo-800'>3D Product Shop</h1>
        </div>
        <div>
          <SearchQuery />
        </div>
      </div>
      <div className='w-full max-w-5xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
          <div>
            <div className='relative'>
              <Canvas3D modelPath={product.modelPath} color={color} />
              {loading && (
                <div className='absolute inset-0 flex items-center justify-center bg-white/80'>
                  <div className='w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' />
                </div>
              )}
            </div>

            <ProductNavigation
              count={products.length}
              activeIndex={activeIndex}
              onChange={(i) => dispatch(setActiveIndex(i))}
              disabled={loading}
            />
          </div>

          <div>
            <ProductInfo
              title={product.title}
              description={product.description}
              price={product.price}
              // rating={
              //   productReviews.reduce((a, r) => a + r.rating, 0) / (productReviews.length || 1)
              // }
              // totalReviews={productReviews.length}
            />

            <div className='mt-4'>
              <ColorPicker
                colors={product.colors ?? ['#ffffff']}
                onChange={(c) => dispatch(setColor(c))}
              />
              <QuantitySelector disabled={loading} />
              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
