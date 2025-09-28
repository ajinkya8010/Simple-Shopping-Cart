import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="header-container">
      <div className="left">
        <h2 className="header-title">
          <Link to="/">E-Commerce Store</Link>
        </h2>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          ☰
        </button>
        <nav className={`primary-nav ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
          <p className="nav-link">About</p>
          <p className="nav-link">Best Sellers</p>
        </nav>
      </div>
      <nav className="header-nav">
        <Link to="/cart" className="cart-link">
          🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
