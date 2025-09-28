// POST order
export const createOrder = (req, res) => {
  const { items } = req.body; 
  // items = [{ productId: 1, quantity: 2 }, ...]

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ message: "Invalid order format" });
  }

  console.log("New Order Received:", items);

  res.json({ message: "Order placed successfully", order: items });
};
