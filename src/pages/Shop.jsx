import React, { useState } from "react";
import Helmet from "../components/helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products)
  const handleFilter = (e) => {
    const filterValue = e.target.value
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);

    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);

    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);

    }
    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);

    }
  }

  const handleSearch = (e) => {
    const searchTgt = e.target.value
    const searchedProducts = products.filter(
      (item) => item.productName.toLowerCase().includes(searchTgt.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <>
      <Helmet title="satis sehifesi" />
      <br />
      <br />
      <br />
      <br />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <input type="text" onChange={handleSearch} />

                <select name="" id="" onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                  <option value="sofa">Sofa</option>
                </select>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productsData.length !== 0 ? (
              <ProductList data={productsData} />

            ) : (
              <h1>Any product not found</h1>
            )}
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Shop;
