import * as React from 'react';

export default function Product(props) {
  const { product, inView = true } = props;
  return (
    <div className="flex flex-col rounded-lg bg-white flex-shrink-0 shadow-sm">
      {inView && (
        <img src={product.image} alt={product.name} className="rounded-t-lg" />
      )}
      <div className="p-3">
        <h3 className="font-medium text-base sm:text-lg text-gray-700">
          {product.name}
        </h3>
      </div>
    </div>
  );
}
