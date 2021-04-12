// https://wireframe.cc/tpHbo3
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import productImage from "../../Images/watch_test.jpeg";

const ProductPageStyle = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #403f4c;
`;

const ImgContainer = styled.div`
  img {
    max-height: 300px;
    max-width: 200px;
    margin: 40px;
  }
`;

function ProductPage(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((res) => setState(res));
    console.log(state);
  }, []);

  return (
    <ProductPageStyle>
      <ImgContainer>
        <img src={productImage} />
      </ImgContainer>
      <div id="product-info">
        <h2>{props.name}</h2>
        <div>Price($) - {props.price} </div>
        <div>Specifications - {props.specification} </div>
        <button>Add to cart</button>
      </div>
      <div id="related-products">{/* Implement carousel here */}</div>
    </ProductPageStyle>
  );
}

export default ProductPage;
