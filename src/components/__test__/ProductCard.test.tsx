import React from "react";
import configureStore from "redux-mock-store";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import ProductCard from "../ProductCard";
import { addToCart } from "@redux/slice/cartSlice";
import { Product } from "types/screens/product";

const mockStore = configureStore([]);

describe("ProductCard", () => {
  const product: Product = {
    id: "1",
    name: "Test Product",
    price: 99.99,
    image: "https://via.placeholder.com/150",
  };

  it("renders correctly", () => {
    const store = mockStore({ cart: { items: [] } });

    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <ProductCard product={product} />
      </Provider>
    );

    expect(getByText("Test Product")).toBeTruthy();
    expect(getByText("$99.99")).toBeTruthy();
    expect(getByLabelText("Product image: Test Product")).toBeTruthy();
  });

  it("dispatches addToCart", () => {
    const store = mockStore({ cart: { items: [] } });

    store.dispatch = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <ProductCard product={product} />
      </Provider>
    );

    fireEvent.press(getByText("Add to Cart"));
    expect(store.dispatch).toHaveBeenCalledWith(addToCart(product));
  });

  it("shows 'Added' if product already in cart", () => {
    const store = mockStore({ cart: { items: [product] } });
    const { getByText } = render(
      <Provider store={store}>
        <ProductCard product={product} />
      </Provider>
    );

    expect(getByText("Added")).toBeTruthy();
  });
});
