import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { CartContext } from "../../context/CartContext";

const cleanAndValidateImage = (image) => {
  if (typeof image !== "string") return "";
  return image.replace(/[\[\]"]+/g, "").trim();
};

const ProductCard = ({ product}) => {
  const { cart, addToCart, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const imageSrc = cleanAndValidateImage(product?.imageUrl);
  const title = product?.name || product?.title || "Product";
  const price = product?.price ?? 0;

  const cartItem = useMemo(() => cart.find((item) => item.id === product?.id), [cart, product?.id]);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    addToCart(product);
  };

  const handleIncrement = () => {
    if (!product?.id) return;
    if (quantity === 0) {
      addToCart(product);
    } else {
      updateCartItemQuantity(product.id, quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (!product?.id || quantity === 0) return;
    if (quantity === 1) {
      removeFromCart(product.id);
    } else {
      updateCartItemQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className="product-card">
      <img
        src={imageSrc}
        alt={title}
        className="product-img"
      />

      <div className="product-info">
        <h6 className="product-title-card" title={title}>{title}</h6>
        <p className="product-price">₹{price}</p>
        {product?.category?.name && (
          <p className="product-category">{product.category.name}</p>
        )}
      </div>

      <div className="product-actions">
        <Link to={`/product/${product?.id}`} className="view-details" aria-label={`View details for ${title}`}>
          View Details
        </Link>

        {quantity > 0 ? (
          <div className="quantity-controls" aria-label={`Quantity controls for ${title}`}>
            <button className="qty-btn" onClick={handleDecrement} aria-label={`Decrease quantity of ${title}`}>−</button>
            <span className="qty-value" aria-live="polite">{quantity}</span>
            <button className="qty-btn" onClick={handleIncrement} aria-label={`Increase quantity of ${title}`}>+</button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="add-to-cart"
            aria-label={`Add ${title} to cart`}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
