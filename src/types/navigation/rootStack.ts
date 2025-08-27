export enum Screens {
  Home = "Home",
  Favorites = "Favorites",
  ProductDetails = "ProductDetails",
  Tabs = "Tabs",
  Cart = "Cart",
}

export type RootStackParamList = {
  [Screens.Home]: undefined;
  [Screens.Favorites]: undefined;
  [Screens.ProductDetails]: { id: string };
  [Screens.Tabs]: undefined;
  [Screens.Cart]: undefined;
};

export type RootStackList = {
  [Screens.Tabs]: undefined;
  [Screens.ProductDetails]: undefined;
};
