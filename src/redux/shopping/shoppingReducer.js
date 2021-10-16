import {
  ADD_TO_CART,
  LOAD_CURRENT_ITEM,
  LOAD_PRODUCT_MODAL,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT_MODAL,
  UPDATE_CART_QUANTITY,
} from "./shoppingTypes";

const cart =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : []
const currentItem =
  localStorage.getItem("currentItem") !== null
    ? JSON.parse(localStorage.getItem("currentItem"))
    : null;

const initState = {
  cart: cart,
  currentItem: currentItem,
  productModal: null,
};

const shoppingReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const inCart = state.cart.find((item) =>
        item.id === newItem.id ? true : false
      );
      const cartItem = inCart
        ? state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, qty: item.qty + newItem.qty }
              : item
          )
        : [
            ...state.cart,
            {
              ...newItem.item,
              colors: newItem.color,
              size: newItem.size,
              qty: newItem.qty,
            },
          ];
      localStorage.setItem("cartItems", JSON.stringify(cartItem));
      return {
        ...state,
        cart: cartItem
      };

    case LOAD_CURRENT_ITEM:
      localStorage.setItem("currentItem", JSON.stringify(action.payload));
      return {
        ...state,
        currentItem: action.payload,
      };

    case LOAD_PRODUCT_MODAL:
      return {
        ...state,
        productModal: action.payload,
      };

    case REMOVE_PRODUCT_MODAL:
      return {
        ...state,
        productModal: null,
      };

    case REMOVE_FROM_CART:
      const ReminderInCart = state.cart.filter(item => item.id !== action.payload)
      localStorage.setItem("cartItems", JSON.stringify(ReminderInCart));
      return {
        ...state,
        cart: ReminderInCart,
      };


    case UPDATE_CART_QUANTITY:
      const cartQty = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {...item, qty: +action.payload.qty}
          } else {
            return item
          }
        })
      localStorage.setItem("cartItems", JSON.stringify(cartQty));
      return {
        ...state,
        cart: cartQty,
      };
    

    default:
      return state;
  }
}

export default shoppingReducer;