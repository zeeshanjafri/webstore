// USED FOR TESTING

export const queryProducts = () => {
  // query all products
  return [
    {
      productID: 1,
      name: "Lays Chips",
      price: 3,
      stock: 100,
      categoryID: 1,
    },
    {
      productID: 2,
      name: "Ritz Crackers",
      price: 3,
      stock: 100,
      categoryID: 2,
    },
    {
      productID: 3,
      name: "Popcorn",
      price: 3,
      stock: 100,
      categoryID: 3,
    },
    {
      productID: 4,
      name: "Diet Coke",
      price: 3,
      stock: 100,
      categoryID: 4,
    },
  ];
};

export const fetchProduct = () => {
  cracker = {
    productID: 2,
    name: "Ritz Crackers",
    price: 3,
    stock: 100,
    categoryID: 2,
  };
  return cracker;
};

export const getOrder = () => {
  order = {
    orderID: 1,
    amount: 3,
    orderCustomerID: 2,
    date: getDate(),
    productID: 2,
    invoiceAmount: 5,
  };
  return order;
};

export const getShipping = () => {
  shippingInfo = {
    orderID: 1,
    shippingID: 3,
    company: "UPS",
    date: getDate(),
    charges: 23,
  };
};
