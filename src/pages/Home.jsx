import React, { useEffect, useState } from "react";
import Helmet from "../components/helmet/Helmet";
import "../styles/home.scss";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero-img.png";
import Services from "../services/Services";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";
const Home = () => {
  const date = new Date();
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "mobile"
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return (
    <>
      <Helmet title="ana sehife" />
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <div className="hero__subtitle">
                  <p>Trending product in {date.getFullYear()}</p>
                  <h2>Make Your Interior More Minimalist & Modern</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt porro optio, pariatur quisquam magnam aliquid sed
                    quod deleniti quia at?
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="buy__btn"
                  >
                    <Link to={"/shop"}>Shop Now</Link>
                  </motion.button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <img src={heroImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <h1 className="text-danger text-center mt-4">Best selling products</h1>
          <Row>
            <ProductList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
