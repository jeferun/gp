import React from 'react';

interface IProps {
  className: string;
  item: any;
}

function Row({ className = '', item = {} }: IProps) {
  console.log(item);
  const obj = Object.entries(item);
  console.log(obj);
  // item[`${i[1]}`]
  return (
    <div className={className}>
      {
        obj.map((i: any) => (
          <div key={i[1]}>{i[1]}</div>
        ))
      }
    </div>
  );
}

export default Row;