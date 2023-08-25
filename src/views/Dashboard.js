import React from 'react';
import InfoGrid from 'layouts/InfoGrid';
import ProfileBar from 'layouts/ProfileBar';

const HorizontalBar = () => {
  return (
    <div className='flex flex-row gap justify-between lg:gap-8 mb-12'>
      <hr className='w-full lg:basis-2/3 border-spacing-0.5 border-white'></hr>
      <span className='w-0 lg:basis-1/3'></span>
    </div>
  );
};

const Dashboard = ({ onLogout, data }) => {
  return (
    <div className='flex flex-row bg-neutral-900 overflow-auto w-full h-full'>
      {/* <div className='bg-purple-900 w-16 h-auto'>

      </div> */}
      <div className='w-full h-full'>
        <div className='flex flex-col m-8'>
          <ProfileBar displayName={data.displayName} avatarUrl={data.avatarUrl} onLogout={onLogout} />
          <HorizontalBar />
          <InfoGrid discountCode={data.discountCode} balance={data.balance} sales={data.sales} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
