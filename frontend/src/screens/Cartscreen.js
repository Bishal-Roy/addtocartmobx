import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartStore from '../StoreCart'

const Cartscreen = () => {
  const cartStore = useContext(CartStore);
  const { store, info, removeFromStore } = cartStore;
  return (
    <Row>
      <Col md={8}>
        <h1>SHOPPING CART</h1>
        {info.length === 0 ? (
          <div>
            Your cart is empty <Link to='/'>Go Back</Link>
          </div>
        ) : (
          <ListGroup variant='flush'>
            {store.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={()=> removeFromStore(item.id)}
                    >
                      remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default observer(Cartscreen);
