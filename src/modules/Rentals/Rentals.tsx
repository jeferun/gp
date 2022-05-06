import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
// bootstrap
import Row from 'react-bootstrap/Row';
// components
import Table from 'components/Table';
// const
import CONSTANTS from 'utils/constants';

function Rentals() {
  const { list } = useSelector((state: RootState) => state.history);

  return (
    <>
      <h3>Rentals</h3>
      <Row as='section'>
        <h4>Rentals history</h4>
        <Table titles={CONSTANTS.TABLE_TITLE} items={list} />
      </Row>
    </>
  );
}

export default Rentals;
