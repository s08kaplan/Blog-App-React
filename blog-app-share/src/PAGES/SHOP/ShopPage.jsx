import React, { useEffect } from "react";
import useProductsCall from "../../SERVICES/useProductsCall";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ShopPage.scss";

const ShopPage = () => {
  const { getAllProducts } = useProductsCall();
  const { products } = useSelector((state) => state.shopping);
  const navigate = useNavigate();
  console.log(products);
  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSelectedProduct = (id) => {
    navigate(`/cart-page/${id}`);
  };

  return (
    <section className="shop-main">
      <div className="container">
        {products?.map((product) => (
          <div
            className="product-card"
            key={product?.id}
            onClick={() => handleSelectedProduct(product.id)}
          >
            <img src={product?.image} alt={product?.title} />
            <h4>{product?.title}</h4>
            <span>{product?.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopPage;
