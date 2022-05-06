import React from 'react';
// bootstrap
import Table from 'react-bootstrap/Table';
// components
import Row from './Row';

interface IProps {
  titles: string[],
  items: IObj[],
}

function CustomTable({ titles, items }: IProps) {
  return (
    <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={`${title}h`}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!items.length && (
          <tr>
            <td colSpan={titles.length} align='center'>There is no data ...</td>
          </tr>
        )}
        {items.map((item) =>
          <Row key={`${item.id}`} item={item} />
        )}
      </tbody>
    </Table>
  );
}

export default CustomTable;