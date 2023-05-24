import React, { useState } from 'react';

const InnerComponents = ({ name, setName }) => {
  const [value, setValue] = useState('bansal');

  return (
    <div>
      InnerComponents:-{name}{' '}
      <button className="bg-green-100" onClick={() => setName(value)}>
        Update Data
      </button>
    </div>
  );
};

const InstaMart = () => {
  const [name, setName] = useState('Atul');

  return (
    <>
      <div>Name:-{name}</div>

      <InnerComponents name={name} setName={setName} />
    </>
  );
};

export default InstaMart;
