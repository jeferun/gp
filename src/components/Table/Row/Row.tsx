import React from 'react';

interface IProps {
  item: IObj;
}

function Row({ item = {} }: IProps) {
  const obj = Object.entries(item);

  return (
    <tr>
      {obj.map((i: any) => (
        <td key={i[0]}>{i[1]}</td>
      ))}
    </tr>
  );
}

export default Row;