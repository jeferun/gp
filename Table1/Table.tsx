import React from 'react';
// components
import Row from './Row';
// styles
import styles from './Table.module.css';

interface IProps {
  titles: { name: string }[],
  items: { id: number, name: string }[],
}

function Table({ titles = [], items = [] }: IProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header_wrapper}>
        {titles.map((title) => (
          <div key={title.name}><span>{title.name}</span></div>
        ))}
      </div>
      {
        items.map((item) =>
          <Row className={styles.row_wrapper} key={item.id} item={item} />
        )
      }
      <div>
        <strong> total 0</strong>
      </div>
    </section>
  );

}

export default Table;