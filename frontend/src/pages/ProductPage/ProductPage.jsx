import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import apiRequest from "../../lib/apiRequest";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    apiRequest.get("/api/products")
      .then((res) => {
        const item = res.data.find((p) => p.id === parseInt(id));
        setProduct(item);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-page">
      <div className="product-img-container">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price-label">
          <strong>Price:</strong> ₹{product.price}
        </p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;