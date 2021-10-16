import React from 'react';
// import useDispatch hook to dispatch the actions
// and useSelector to get state from store 
import { useSelector, useDispatch } from 'react-redux';
// import ProductView component 
import ProductView from './ProductView';
// import Icon from react-icons
import { AiOutlineClose } from 'react-icons/ai'
// import shopping actions 
import { removeProductModal } from '../redux/shopping/shoppingActions';

const ProductViewModal = () => {
  const dispatch = useDispatch();
  let productModal = useSelector((state) => state.shopping.productModal);

  const closeModal = (e) => {
    if(e.target.classList.contains("product-view__modal")) {
      dispatch(removeProductModal())
    }
  };

  return (
    <div
      className={`product-view__modal ${productModal === null ? "" : "active"}`}
      onClick={closeModal}
    >
      <div className="product-view__modal__content">
        <ProductView product={productModal} />
        <div className="product-view__modal__content__close">
          <button onClick={() => dispatch(removeProductModal())}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductViewModal
