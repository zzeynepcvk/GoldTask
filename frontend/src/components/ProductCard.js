import { useState } from 'react';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState('yellow');
  const colors = ['yellow', 'rose', 'white'];

  
  const colorCodes = {
    yellow: '#E6CA97',
    rose: '#E1A4A9',
    white: '#D9D9D9',
  };

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white">
      <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>

      
      <img
        src={product.images[selectedColor]}
        alt={`${product.name} - ${selectedColor}`}
        className="w-full h-64 object-contain mb-4"
      />

      
      <div className="flex justify-center space-x-2 mb-4">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            title={color}
            className={`w-6 h-6 rounded-full border-2 ${
              selectedColor === color ? 'ring-2 ring-black' : 'border-gray-300'
            }`}
            style={{ backgroundColor: colorCodes[color] }}
          />
        ))}
      </div>

      
      <div className="text-left space-y-1">
        <p className="text-lg font-medium">
           <span className="text-green-600">${product.price} USD</span>
        </p>
        <p> {(selectedColor)} gold</p>
        


        
        <StarRating score={parseFloat(product.popularityOutOfFive)} />
      </div>
    </div>
  );
}
