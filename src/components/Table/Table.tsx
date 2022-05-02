import React from 'react';

interface IProps {
  color: string;
}

function Table({ color }: IProps) {
  return (
    <div>
      <h1>{color}</h1>
    </div>
  );

}

export default Table;