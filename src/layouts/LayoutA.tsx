import React from 'react';
// module
import NavBar from 'components/NavBar';

interface IProps {
  children: JSX.Element
}

function LayoutA({children}: IProps) {
  return (
    <div>
      <NavBar />
      <div className='container'>
        {children}
      </div>
    </div>
  );
}

export default LayoutA;