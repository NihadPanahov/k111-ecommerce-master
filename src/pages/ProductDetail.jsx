import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import products from "../assets/data/products";
import Helmet from '../components/helmet/Helmet';

const ProductDetail = () => {
    const { id } = useParams()
    const product = products.find((item) => item.id === id)
    const {
        imgUrl,
        productName,
        price,
        avgRating,
        reviews,
        description,
        shortDesc,
        category,
    } = product;

    return (
        <>
            <Helmet title="Product-detail" />
            <br /><br /><br />
            <section className='pt-0'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg="6">
                            <img className='img-fluid' src={imgUrl} alt="" />
                        </Col>
                        <Col lg="6">
                            <h2>{productName}</h2>
                            <h2>Price: {price}</h2>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default ProductDetail