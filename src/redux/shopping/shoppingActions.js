import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT_MODAL,
  LOAD_PRODUCT_MODAL,
  LOAD_CURRENT_ITEM,
  UPDATE_CART_QUANTITY,
} from "./shoppingTypes";

export const addToCart = (id, color, size, qty) => {
  return (dispatch) => {
    let products = [];
    // fetch("http://localhost:5000/products")
    fetch("https://api.npoint.io/402b2b47fdf3738c33c2/products")
      .then((res) => res.json())
      .then((data) => {
        products = data;

        const item = products.find((product) => product.id === id);
        dispatch({
          type: ADD_TO_CART,
          payload: {
            item,
            id,
            color,
            size,
            qty,
          },
        });
      });
  }
}

export const loadCurrentItem = (item) => {
  return{
    type: LOAD_CURRENT_ITEM,
    payload: item
  }
}

export const loadProductModal = (item) => {
  return {
    type: LOAD_PRODUCT_MODAL,
    payload: item,
  };
}

export const removeProductModal = () => {
  return {
    type: REMOVE_PRODUCT_MODAL,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
}

export const updateCartQuantity = (id, qty) => {
  return{
    type: UPDATE_CART_QUANTITY,
    payload: {id, qty}
  }
}