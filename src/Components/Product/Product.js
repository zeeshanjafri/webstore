// https://wireframe.cc/tpHbo3

import React from "react";

function productPage() {
  return (
    <div>
      <div id="product-img"></div>
      <div id="product-info">
        <h2>Product Name</h2>
        <div>Price($)</div>
        <div>Specifications</div>
        <button>Add to cart</button>
      </div>
      <div id="related-products">{/* Implement carousel here */}</div>
    </div>
  );
}

export default productPage;
