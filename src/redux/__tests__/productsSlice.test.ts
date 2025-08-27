
import * as api from "services/api";
import reducer, { fetchProducts, setProducts } from "../slice/productsSlice";
import { Product } from "../../types/screens/product";
import { AnyAction } from "@reduxjs/toolkit";

const mockedApi = api as jest.Mocked<typeof api>;
jest.mock("services/api");

jest.mock("@env", () => ({
  BASE_URL: "https://mocki.io/v1/c53fb45e-5085-487a-afac-0295f62fb86e",
}));

describe("productsSlice", () => {
  const initialState = {
    items: [] as Product[],
    loading: false,
    error: null as string | null,
  };

  it("should return the initial state by default", () => {
    const action = { type: "unknown" } as AnyAction;
    const state = reducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it("should set products with setProducts", () => {
    const products: Product[] = [
      {
        id: "1",
        name: "Test",
        price: 100,
        image: "https://via.placeholder.com/150",
      },
    ];
    const state = reducer(initialState, setProducts(products));
    expect(state.items).toEqual(products);
  });

  describe("fetchProducts async thunk", () => {
    it("should handle pending state", () => {
      const action = { type: fetchProducts.pending.type };
      const state = reducer(initialState, action);
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it("should handle fulfilled state", () => {
      const products: Product[] = [
        {
          id: "1",
          name: "Phone",
          price: 999,
          image: "https://via.placeholder.com/150",
        },
      ];
      const action = {
        type: fetchProducts.fulfilled.type,
        payload: products,
      };
      const state = reducer(initialState, action);
      expect(state.loading).toBe(false);
      expect(state.items).toEqual(products);
    });

    it("should handle rejected state", () => {
      const action = {
        type: fetchProducts.rejected.type,
        payload: "Failed to fetch",
      };
      const state = reducer(initialState, action);
      expect(state.loading).toBe(false);
      expect(state.error).toBe("Failed to fetch");
    });

    it("should dispatch fulfilled when API resolves", async () => {
      const products: Product[] = [
        {
          id: "1",
          name: "Tablet",
          price: 500,
          image: "https://via.placeholder.com/150",
        },
      ];
      mockedApi.fetchProducts.mockResolvedValueOnce(products);

      const dispatch = jest.fn();
      const thunk = fetchProducts();

      await thunk(dispatch, () => initialState, undefined);

      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: fetchProducts.pending.type })
      );
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: fetchProducts.fulfilled.type,
          payload: products,
        })
      );
    });

    it("should dispatch rejected when API rejects", async () => {
      mockedApi.fetchProducts.mockRejectedValueOnce(new Error("Network Error"));

      const dispatch = jest.fn();
      const thunk = fetchProducts();

      await thunk(dispatch, () => initialState, undefined);

      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: fetchProducts.pending.type })
      );
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: fetchProducts.rejected.type,
          payload: "Network Error",
        })
      );
    });
  });
});
