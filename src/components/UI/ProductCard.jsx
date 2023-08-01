import React from "react";
import { Col } from "reactstrap";
import '../../styles/productCard.scss'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()
  function addToCart(){
    dispatch(
      cartActions.addItem({
        id: item.id,
        priductName: item.priductName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    )
    console.log("Added to cart");
  }

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <Link to={`/shop/${item.id}`}>
          <div className="product__img">
            <motion.img whileHover={{ scale: 0.9 }} className="img-fluid" src={item.imgUrl} alt="" />
          </div>
        </Link>
        <div className="product__info p-2 text-center">
          <h2>{item.productName}</h2>
          <span>{item.category}</span>
          <button onClick={addToCart} className="btn btn-success">Add to cart</button>
        </div>
      </div>

    </Col>
  );
};

export default ProductCard;
