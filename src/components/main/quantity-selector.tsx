'use client';
import { setCartDecrement, setCartIncrement } from '@/redux/slice/addToCartSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../common/Button';
import { Icons } from '@/lib/icons';

interface Props {
  disabled?: boolean;
}

const QuantitySelector: React.FC<Props> = ({ disabled }) => {
  const quantity = useSelector((state: RootState) => state.cart.quantity);

  const dispatch = useDispatch();

  return (
    <div className='flex items-center gap-2 mt-4'>
      <Button
        classDactive={true}
        className='p-2 bg-fuchsia-600 rounded-l-md border border-gray-200'
        icon={<Icons.Minus />}
        type='button'
        onClick={() => dispatch(setCartDecrement())}
        disabled={disabled}
      />
      <span className='w-12 text-center border-t border-b border-gray-200 py-2 bg-transparent text-teal-900'>
        {quantity}
      </span>
      <Button
        classDactive={true}
        className='p-2 bg-fuchsia-600 rounded-r-md border border-gray-200'
        icon={<Icons.Plus />}
        type='button'
        onClick={() => dispatch(setCartIncrement())}
        disabled={disabled}
      />
    </div>
  );
};

export default QuantitySelector;
