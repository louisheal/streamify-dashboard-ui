import React from 'react';
import PanelGrid from './PanelGrid';
import OrderGraph from 'components/OrderGraph/OrderGraph'

const InfoGrid = ({ orders, discountCode, balance, sales }) => {
  return (
    <div className='flex flex-row flex-wrap lg:flex-nowrap justify-between gap-8'>
      <OrderGraph orders={orders} />
      <PanelGrid discountCode={discountCode} balance={balance} sales={sales} />
    </div>
  );
};

export default InfoGrid;
