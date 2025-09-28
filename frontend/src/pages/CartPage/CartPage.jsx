import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import apiRequest from "../../lib/apiRequest";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemQuantity, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    const items = cart.map((i) => ({ productId: i.id, quantity: i.quantity }));
    try {
      const res = await apiRequest.post("/api/orders", { items });
      alert(res.data.message || "Order placed");
      clearCart();
    } catch (e) {
      alert("Checkout failed");
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>
                    Quantity:
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateCartItemQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                  </p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartPage;