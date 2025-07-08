
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function StarRating({ score }) {
  
  const rounded = Math.round(score * 2) / 2;

  const fullStars = Math.floor(rounded); 
  const hasHalfStar = rounded % 1 !== 0; 
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 

  return (
    <div className="flex items-center text-yellow-400 text-lg">
      {Array(fullStars).fill().map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
      {Array(emptyStars).fill().map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
      <span className="text-sm text-gray-600 ml-2">{rounded.toFixed(1)} / 5</span>
    </div>
  );
}
