import React from 'react';
// bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// imgs
import defaultImg from 'assets/img/defImg.png';
// styles
import styles from './Card.module.css';

interface IProps {
  title: string;
  imgUrl: string;
  type: IProductType;
  colors: string;
  handleOnClick: () => void;
}

function CustomCard({ title, type, imgUrl, colors, handleOnClick }: IProps) {
  return (
    <Card className={styles.card}>
      <Col className={styles.cardImg}>
        <Card.Img variant='top' src={imgUrl || defaultImg} />
      </Col>
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Row>
          <Col xs={8}>
            <Card.Text>
              Type: {type.name}
              Colors: {colors}
            </Card.Text>
          </Col>
          <Col xs={2}>
            <Button variant='light' onClick={handleOnClick}>Rent</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;