import { LinkingOptions } from "@react-navigation/native";
import { RootStackParamList } from "@types";

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    "myshoplite://",
    "https://myshoplite.app",
    "http://192.168.1.6:8081",
  ],
  config: {
    screens: {
      ProductDetails: "product/:id",
      Tabs: {
        screens: {
          Home: "home",
          Favorites: "favorites",
          Cart: "cart",
        },
      },
    },
  },
};
