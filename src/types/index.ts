export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  category?: string;
};

export type RootStackParamList = {
  Tabs: undefined;
  ProductDetails: { id: string };
  Cart: undefined;
};

export type TabsParamList = {
  Home: undefined;
  Favorites: undefined;
  Cart: undefined;
};
