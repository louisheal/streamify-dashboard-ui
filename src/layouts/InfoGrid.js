import React from 'react';
import PanelGrid from './PanelGrid';
import OrderGraph from 'components/OrderGraph/OrderGraph'

const InfoGrid = ({ discountCode, balance, sales }) => {
  return (
    <div className='flex flex-row flex-wrap lg:flex-nowrap justify-between gap-8'>
      <OrderGraph labels={['1', '2', '3']} values={[0.49, 0.59, 0.68]} />
      <PanelGrid discountCode={discountCode} balance={'$' + balance} sales={sales} />
    </div>
  );
};

export default InfoGrid;
