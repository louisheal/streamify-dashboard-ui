import React from 'react';
import PanelGrid from './PanelGrid';

const OrderTable = () => {
  return (
    <div className='flex flex-col w-full lg:basis-2/3 gap-3'>
      <h1 className='text-white text-2xl font-thin'>Your Sales</h1>
      <div className='bg-neutral-800 w-full h-full'></div>
    </div>
  );
};

const InfoGrid = ({ discountCode, balance, sales }) => {
  return (
    <div className='flex flex-row flex-wrap lg:flex-nowrap justify-between gap-8'>
      <OrderTable />
      <PanelGrid discountCode={discountCode} balance={balance} sales={sales} />
    </div>
  );
};

export default InfoGrid;
