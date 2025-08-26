import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CategoryFilter from "../CategoryFilter";
import { Platform } from "react-native";

describe("CategoryFilter", () => {
  const categories = ["Electronics", "Clothing", "Books"];
  const onSelectMock = jest.fn();

  it("renders all categories correctly", () => {
    const { getByText } = render(
      <CategoryFilter
        categories={categories}
        selectedCategory="Electronics"
        onSelect={onSelectMock}
      />
    );

    categories.forEach((cat) => {
      expect(getByText(cat)).toBeTruthy();
    });
  });

  it("applies selected styles correctly", () => {
    const { getByText } = render(
      <CategoryFilter
        categories={categories}
        selectedCategory="Clothing"
        onSelect={onSelectMock}
      />
    );

    const selectedCategoryText = getByText("Clothing");
    expect(selectedCategoryText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: expect.any(String) }),
      ])
    );
  });

  it("calls onSelect when a category is pressed", () => {
    const { getByText } = render(
      <CategoryFilter
        categories={categories}
        selectedCategory="Electronics"
        onSelect={onSelectMock}
      />
    );

    fireEvent.press(getByText("Books"));
    expect(onSelectMock).toHaveBeenCalledWith("Books");

    fireEvent.press(getByText("Electronics"));
    expect(onSelectMock).toHaveBeenCalledWith("Electronics");
  });

it("renders correct width for web platform", () => {
  const originalOS = Platform.OS;
  Platform.OS = "web";

  const { getByTestId } = render(
    <CategoryFilter
      categories={categories}
      selectedCategory="Electronics"
      onSelect={onSelectMock}
    />
  );

  const button = getByTestId("category-Electronics");

  const styleArray = button.props.style;
  const flattenedStyle = Array.isArray(styleArray)
    ? Object.assign({}, ...styleArray)
    : styleArray;

  expect(flattenedStyle.width).toEqual(expect.any(Number));
  Platform.OS = originalOS;
});

});
