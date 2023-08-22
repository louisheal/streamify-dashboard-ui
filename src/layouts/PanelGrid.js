import React from 'react';
import ValuePanel from 'components/ValuePanel';

const PanelGrid = ({ discountCode, sales, balance }) => {
  return (
    <div className='flex flex-col justify-between w-full lg:basis-1/3 gap-3'>
      <ValuePanel label="Discount Code" value={discountCode} />
      <ValuePanel label="Sales" value={sales} />
      <ValuePanel label="Balance" value={balance} />
    </div>
  );
};

export default PanelGrid;
