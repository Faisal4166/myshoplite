import axios from "axios";
import { Product } from "../types";
import { API_BASE } from "./config/url";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await axios.get<Product[]>(API_BASE);
    return res.data;
  } catch (error: any) {
    console.error("Error fetching products:", error.message || error);
    throw new Error("Failed to fetch products. Please try again.");
  }
}

export async function fetchProductById(
  id: string
): Promise<Product | undefined> {
  try {
    const products = await fetchProducts();
    return products.find((p) => p.id.toString() === id.toString());
  } catch (error: any) {
    console.error("Error fetching product by ID:", error.message || error);
    return undefined;
  }
}
export function BASE_URL(BASE_URL: any) {
    throw new Error("Function not implemented.");
}

