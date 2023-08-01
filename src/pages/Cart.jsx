import React from 'react'
import Helmet from '../components/helmet/Helmet'
import { useSelector } from 'react-redux'
import { Col, Container, Row } from 'reactstrap';

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log({totalAmount});
  console.log(cartItems);

  return (
    <>
      <section>
        <br /><br /><br /><br />
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <>
                  <h1>Empty basket</h1>
                </>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td><img className='img-fluid' style={{ width: 50 }} src={item.imgUrl} alt="" /></td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )

              }
            </Col>
            <Col lg="3">
              <div>
                <h6>Total Price</h6>
                <h1>{totalAmount}</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>




      <Helmet title="cart sehifesi" />
    </>

  )
}

export default Cart