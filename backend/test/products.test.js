import request from "supertest";
import app from "../app.js";

describe("Products API", () => {
  describe("GET /api/products", () => {
    it("should return a list of products", async () => {
      const response = await request(app)
        .get("/api/products")
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it("should return products with required fields", async () => {
      const response = await request(app)
        .get("/api/products")
        .expect(200);

      const product = response.body[0];
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("name");
      expect(product).toHaveProperty("price");
      expect(product).toHaveProperty("imageUrl");
    });

    it("should return products with correct data types", async () => {
      const response = await request(app)
        .get("/api/products")
        .expect(200);

      const product = response.body[0];
      expect(typeof product.id).toBe("number");
      expect(typeof product.name).toBe("string");
      expect(typeof product.price).toBe("number");
      expect(typeof product.imageUrl).toBe("string");
    });

    it("should return exactly 10 products", async () => {
      const response = await request(app)
        .get("/api/products")
        .expect(200);

      expect(response.body).toHaveLength(10);
    });

    it("should have unique product IDs", async () => {
      const response = await request(app)
        .get("/api/products")
        .expect(200);

      const ids = response.body.map(product => product.id);
      const uniqueIds = [...new Set(ids)];
      expect(ids).toHaveLength(uniqueIds.length);
    });

    it("should have valid image URLs", async () => {
      const response = await request(app)
        .get("/api/products")
        .expect(200);

      response.body.forEach(product => {
        expect(product.imageUrl).toMatch(/^https?:\/\/.+/);
      });
    });

    it("should have positive prices", async () => {
      const response = await request(app)
        .get("/api/products")
        .expect(200);

      response.body.forEach(product => {
        expect(product.price).toBeGreaterThan(0);
      });
    });
  });
});