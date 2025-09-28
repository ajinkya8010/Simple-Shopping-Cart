import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import apiRequest from "../../lib/apiRequest";
import "./HomePage.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    // Fetch products from backend
    apiRequest.get("/api/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
        console.log("HI");
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "priceLow") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHigh") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, sortOption, products]);

  return (
    <div className="homepage">
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;