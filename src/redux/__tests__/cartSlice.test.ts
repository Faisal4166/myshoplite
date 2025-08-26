import cartReducer, {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../slice/cartSlice";
import { Product } from "@types";

describe("cartSlice", () => {
  const product: Product = {
    id: "1",
    name: "Test Product",
    price: 50,
    image: "https://via.placeholder.com/150",
  };

  it("should return the initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual({ items: [] });
  });

  it("should add a product to the cart", () => {
    const state = cartReducer(undefined, addToCart(product));
    expect(state.items.length).toBe(1);
    expect(state.items[0]).toEqual({ ...product, quantity: 1 });
  });

  it("should increment quantity if product already exists", () => {
    const initialState = { items: [{ ...product, quantity: 1 }] };
    const state = cartReducer(initialState, addToCart(product));
    expect(state.items[0].quantity).toBe(2);
  });

  it("should remove a product from the cart", () => {
    const initialState = { items: [{ ...product, quantity: 1 }] };
    const state = cartReducer(initialState, removeFromCart(product.id));
    expect(state.items.length).toBe(0);
  });

  it("should update quantity of a product", () => {
    const initialState = { items: [{ ...product, quantity: 1 }] };
    const state = cartReducer(
      initialState,
      updateQuantity({ id: product.id, quantity: 5 })
    );
    expect(state.items[0].quantity).toBe(5);
  });

  it("should clear the cart", () => {
    const initialState = { items: [{ ...product, quantity: 3 }] };
    const state = cartReducer(initialState, clearCart());
    expect(state.items.length).toBe(0);
  });
});
