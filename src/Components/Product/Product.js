// https://wireframe.cc/tpHbo3

import React from "react";
import styled from "styled-components";
import productImage from "../../Images/watch_test.jpeg";

const ProductPage = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: row;
`;

const ImgContainer = styled.div`
  img {
    max-height: 300px;
    max-width: 200px;
    margin: 40px;
  }
`;

function productPage(props) {
  return (
    <ProductPage>
      <ImgContainer>
        <img src={productImage} />
      </ImgContainer>
      <div id="product-info">
        <h2>Product name - {props.name}</h2>
        <div>Price($) - {props.price} </div>
        <div>Specifications - {props.specification} </div>
        <button>Add to cart</button>
      </div>
      <div id="related-products">{/* Implement carousel here */}</div>
    </ProductPage>
  );
}

export default productPage;
