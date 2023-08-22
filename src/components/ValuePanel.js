import React from 'react';

const Label = ({ label }) => {
  return (
    <span className='text-white text-2xl font-thin'>
      {label}
    </span>
  );
};

const Value = ({ value }) => {
  return (
    <span className='text-white text-5xl font-thin bg-neutral-800 py-8 pl-12' >
      {value}
    </span>
  );
};

const ValuePanel = ({ label, value }) => {
  return (
    <div className='flex flex-col gap-3' >
      <Label label={label} />
      <Value value={value} />
    </div>
  );
};

export default ValuePanel;
