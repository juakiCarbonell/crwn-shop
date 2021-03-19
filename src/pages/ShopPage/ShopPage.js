import React from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import SHOP_DATA from './shopData';

const ShopPage = () => {
  return (
    <div className='shop-page'>
      {SHOP_DATA.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  );
};

export default ShopPage;
