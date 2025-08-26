import reducer, {
  addFavorite,
  clearFavorites,
  removeFavorite,
  toggleFavorite,
} from "@redux/slice/favoritesSlice";

describe("favoritesSlice", () => {
  const initialState = { ids: [] as string[] };

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should add a favorite if not already in the list", () => {
    const nextState = reducer(initialState, addFavorite("1"));
    expect(nextState.ids).toEqual(["1"]);
  });

  it("should not add duplicate favorites", () => {
    const state = { ids: ["1"] };
    const nextState = reducer(state, addFavorite("1"));
    expect(nextState.ids).toEqual(["1"]);
  });

  it("should remove a favorite", () => {
    const state = { ids: ["1", "2"] };
    const nextState = reducer(state, removeFavorite("1"));
    expect(nextState.ids).toEqual(["2"]);
  });

  it("should toggle: add if not present", () => {
    const nextState = reducer(initialState, toggleFavorite("1"));
    expect(nextState.ids).toEqual(["1"]);
  });

  it("should toggle: remove if already present", () => {
    const state = { ids: ["1"] };
    const nextState = reducer(state, toggleFavorite("1"));
    expect(nextState.ids).toEqual([]);
  });

  it("should clear all favorites", () => {
    const state = { ids: ["1", "2"] };
    const nextState = reducer(state, clearFavorites());
    expect(nextState.ids).toEqual([]);
  });
});
