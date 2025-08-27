import axios from "axios";
import { fetchProducts, fetchProductById } from "../api";
import { Product } from "types/screens/product";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("API Service", () => {
  const mockProducts: Product[] = [
    {
      id: "1",
      name: "Laptop",
      price: 1000,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Phone",
      price: 500,
      image: "https://via.placeholder.com/150",
    },
  ];

  let errorSpy: jest.SpyInstance;

  beforeAll(() => {
    // silence console.error but still let us assert calls
    errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    errorSpy.mockRestore();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetchProducts should return product list", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockProducts });

    const result = await fetchProducts();
    expect(result).toEqual(mockProducts);
    expect(mockedAxios.get).toHaveBeenCalledWith(expect.any(String));
  });

  it("fetchProducts should throw error on failure", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    await expect(fetchProducts()).rejects.toThrow(
      "Failed to fetch products. Please try again."
    );

    expect(errorSpy).toHaveBeenCalledWith(
      "Error fetching products:",
      "Network Error"
    );
  });

  it("fetchProductById should return product by ID", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockProducts });

    const result = await fetchProductById("1");
    expect(result).toEqual(mockProducts[0]);
  });

  it("fetchProductById should return undefined if product not found", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockProducts });

    const result = await fetchProductById("99");
    expect(result).toBeUndefined();
  });

  it("fetchProductById should return undefined on error", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    const result = await fetchProductById("1");
    expect(result).toBeUndefined();

    expect(errorSpy).toHaveBeenCalledWith(
      "Error fetching product by ID:",
      "Failed to fetch products. Please try again."
    );
  });
});
