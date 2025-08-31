'use client';

import { BiHeart } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import Button from '../common/Button';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

interface IActionButtons {
  handleAdd?: () => void;
}

const ActionButtons = ({ handleAdd }: IActionButtons) => {
  const quantity = useSelector((state: RootState) => state.cart.quantity);
  return (
    <div className='flex gap-4 mt-4'>
      <Button
        onClick={handleAdd}
        title='Add to Cart'
        type='button'
        icon={<CgShoppingCart size={18} />}
        className={`${quantity === 0 ? 'bg-green-300' : 'bg-green-600'}`}
        disabled={quantity === 0 ? true : false}
      />
      <Button
        onClick={handleAdd}
        title='Wishlist'
        type='button'
        icon={<BiHeart size={18} />}
        className={`${quantity === 0 ? 'bg-pink-300' : 'bg-pink-600'}`}
        disabled={quantity === 0 ? true : false}
      />
    </div>
  );
};

export default ActionButtons;
