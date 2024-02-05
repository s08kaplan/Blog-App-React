import { useParams } from "react-router-dom";
import "./CartPage.scss";
import { useSelector } from "react-redux";
import { useState } from "react";

const CartPage = () => {
  const { products } = useSelector((state) => state.shopping);
  const { cartId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const selectedProduct = products?.find((product) => product.id == cartId);

  const handleClick = (e) => {
    
    if (e.target.textContent == "-" && quantity > 1) {
      
     return setQuantity(quantity - 1);
    } else if (e.target.textContent == "+") {
    return  setQuantity(quantity + 1);
    } else {
     return setQuantity(1);
    }
  };

  return (
    <section className="cart-main">
      <div className="cart-container">
        <div className="selected-product">
          {selectedProduct ?
            (<div className="product-card">
              <img src={selectedProduct?.image} alt={selectedProduct?.title} />
              <span>{selectedProduct?.title}</span>
              <span>{selectedProduct?.description}</span>
              <div className="price">
                <button onClick={handleClick}>-</button>
                <span>{quantity}</span>
                <button onClick={handleClick}>+</button>
              </div>
              <span>${selectedProduct?.price}</span>
            </div>) :
            (<span>No selected product</span> )
          }
        </div>
       {selectedProduct && <div className="total">sub-Total Price :{(quantity * selectedProduct?.price).toFixed(2)}</div>}
      </div>
    </section>
  );
};

export default CartPage;
