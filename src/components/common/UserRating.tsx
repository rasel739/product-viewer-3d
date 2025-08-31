import { Icons } from '@/lib/icons';

interface IUserRating {
  rating: number;
  totalStars?: number;
  totalReviews?: number;
}

const UserRating = ({ rating, totalStars = 5, totalReviews }: IUserRating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  console.log('rating:', rating);
  return (
    <div className='flex items-center gap-1'>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Icons.Star key={`full-${i}`} className='text-yellow-500 fill-yellow-500 w-5 h-5' />
      ))}

      {hasHalfStar && <Icons.HalfStar className='text-yellow-500 fill-yellow-500 w-5 h-5' />}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <Icons.EmptyStar key={`empty-${i}`} className='text-gray-300 w-5 h-5' />
      ))}

      <span className='ml-2 text-sm text-gray-600'>({rating && rating?.toFixed(1)})</span>

      {totalReviews !== undefined && (
        <span className='ml-1 text-sm text-gray-500 dark:text-gray-400'>
          ({totalReviews} reviews)
        </span>
      )}
    </div>
  );
};

export default UserRating;
