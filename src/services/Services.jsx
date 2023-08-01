import React from 'react'
import serviceData from '../assets/data/serviceData'
import { Col, Container, Row } from 'reactstrap';
import './services.scss';
const Services = () => {
 console.log(serviceData);
    return (
    <section className='services'>
      <Container>
        <Row>
{serviceData.map((item,id)=>(
  <Col lg="3" md="4" key={id} style={{backgroundColor:item.bg}} >
    <div className='motion'>
      <span><i className={item.icon}></i></span>
      <div>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>

    </div>
  </Col>
))}
        </Row>
      </Container>

    </section>
  )
}

export default Services