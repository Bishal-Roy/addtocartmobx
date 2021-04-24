import React from 'react';
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../data/products';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import CartStore from '../Store';

const Productscreen = ({ match, history }) => {
  const productId = match.params.id;
  const product = products.find((product) => product.id === productId);
  const cartStore = useContext(CartStore);
  const { addToCart } = cartStore;
  const addToCartHandelar = () => {
    history.push(`/cart/${productId}`);
    addToCart(productId);
  };
  return (
    <>
      <Link to={`/`}>
        <Button className='btn'>Go Back</Button>
      </Link>
      <Row className='mt-3'>
        <Col md={6}>
          <Image src={product.image} alt={`Image`} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>price:</Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>status:</Col>
                <Col>{product.countInStock > 0 ? 'In stock' : 'Out stock'}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                onClick={addToCartHandelar}
                className='btn-block btn-dark'
                type='button'
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default observer(Productscreen);
