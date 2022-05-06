import React, { useCallback, useEffect, useState } from 'react';
// bootstrap
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// redux
import { batch, useSelector, useDispatch } from 'react-redux';
// actions and selectors
import {
  products,
  productTypes,
  setTypeId,
  // selector
  selectProductsByType
} from 'store/product';
import { setHistory } from 'store/history';
import { RootState } from 'store';
// components
import Card from 'components/Card';
import Modal from 'components/Modal';

const initialProduct = {
  id: 0,
  name: '',
  type: { id: 0, name: '' },
  colors: '',
  imgUrl: '',
};

function Catalog() {
  const dispatch = useDispatch();
  // handle and get  state
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>(initialProduct);
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  // get state
  const listProducts = useSelector(selectProductsByType, () => false);
  const { types, typeId } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    const getProducts: any = products();
    const getProductType: any = productTypes();
    batch(() => {
      dispatch(getProducts);
      dispatch(getProductType);
    });
  }, []);

  const handleOnChange = useCallback(({ target }: any) => {
    const newTypeId = Number(target.value);

    dispatch(setTypeId(newTypeId));
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  const handleOpenModal = useCallback((product: IProduct) => {
    setSelectedProduct(product);
    setOpen(!isOpen);
  }, [isOpen]);

  const handleAddRental = (num: number) => {
    const {name, type, colors} = {...selectedProduct};
    const newHistory = {name, type: type.name, colors,  days: num};

    dispatch(setHistory(newHistory));
    setOpen(!isOpen);
  };

  const handleClose = () => setOpen(!isOpen);

  return (
    <>
      <Row>
        <h3>Catalog</h3>
      </Row>
      <Row md={4} as='section'>
        <Form.Group className="mb-3 mt-3" controlId="selectProductType">
          <Form.Label> Product types</Form.Label>
          <Form.Select id='selectProductType' aria-label='Default select example' onChange={handleOnChange} defaultValue={typeId}>
            <option value={0}>All</option>
            {types.map((type) => (
              <option value={type.id} key={type.id}>{type.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </Row>
      <Row as='section'>
        {listProducts.map(({ id, name, type, colors, imgUrl }) => (
          <Card
            key={id}
            title={name}
            type={type}
            imgUrl={imgUrl}
            colors={colors}
            handleOnClick={
              () => handleOpenModal({ id, name, type, imgUrl, colors })
            }
          />
        ))}
      </Row>
      <Modal
        title={selectedProduct.name}
        isOpen={isOpen}
        handleClose={handleClose}
        handleAddRental={handleAddRental}
      />
    </>
  );
}

export default Catalog;
