import express from "express";
import cors from "cors"; // <--- import

import productRoutes from "./routes/product.route.js";
import orderRoutes from "./routes/order.route.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
