import React from 'react';
// bootstrap
import Container from 'react-bootstrap/Container';
// module
import NavBar from 'components/NavBar';

interface IProps {
  children: JSX.Element
}

function LayoutA({children}: IProps) {
  return (
    <div>
      <NavBar />
      <Container fluid='md'>
        {children}
      </Container>
    </div>
  );
}

export default LayoutA;