import React, { useEffect } from "react";
import useProductsCall from "../../SERVICES/useProductsCall";
import { useSelector } from "react-redux";
import "./ShopPage.scss"

const ShopPage = () => {
  const { getAllProducts } = useProductsCall();
  const { products } = useSelector((state) => state.shopping);
console.log(products);
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <section className="shop-main">
      <div className="container">
        {products?.map((product) => (
          <div className="product-card" key={product?.id}>
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
