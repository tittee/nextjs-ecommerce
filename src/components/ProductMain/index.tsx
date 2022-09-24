import React from 'react';
import { Heading2 } from '@common/Heading';
import Product from '@components/Product';
import { ProductMainProps } from 'interfaces/components';

const ProductMain = ({ title, products }: ProductMainProps) => {
  return (
    <div className="w-full">
      <Heading2 style={{ paddingBottom: '0.5rem' }}>{title || 'สินค้าของฉัน'}</Heading2>
      <div className="flex flex-wrap gap-4">
        <div className="w-full md:w-4/12 lg:w-2/12 p-2">
          {products
            ? products.map((product) => <Product key={product.id} {...product} />)
            : 'ไม่มีสินค้า'}
        </div>
      </div>
    </div>
  );
};

export default ProductMain;
