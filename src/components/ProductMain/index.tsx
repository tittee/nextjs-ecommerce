import React from 'react';
import { Heading2 } from '@common/Heading';
import Product from '@components/Product';
import { ProductMainProps } from 'interfaces/components';

const ProductMain = ({ id, title, products }: ProductMainProps) => {
  return (
    <div key={`Product-Main-${id}`} className="w-full">
      <Heading2 style={{ paddingBottom: '0.5rem' }}>{title || 'สินค้าของฉัน'}</Heading2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products
          ? products.map((product) => (
              <div className="w-full ">
                <Product key={product.id} {...product} />
              </div>
            ))
          : 'ไม่มีสินค้า'}
      </div>
    </div>
  );
};

export default ProductMain;
