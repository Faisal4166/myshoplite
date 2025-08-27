import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "types/screens/product";
import { fetchProducts as apiFetchProducts } from "services/api";

type ProductsState = {
  items: Product[];
  loading: boolean;
  error?: string | null;
};

const initialState: ProductsState = { items: [], loading: false, error: null };

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const data = await apiFetchProducts();
    return data;
  } catch (e: any) {
    return rejectWithValue(e?.message || "Failed to load products");
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(fetchProducts.fulfilled, (s, a) => {
        s.loading = false;
        s.items = a.payload;
      })
      .addCase(fetchProducts.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload ?? "Error";
      });
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
