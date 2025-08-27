import { LinkingOptions } from "@react-navigation/native";
import { RootStackParamList, Screens } from "types/navigation/rootStack";
import { DEEPLINK_PREFIX_1, DEEPLINK_PREFIX_2, DEEPLINK_PREFIX_3 } from "@env";

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [DEEPLINK_PREFIX_1, DEEPLINK_PREFIX_2, DEEPLINK_PREFIX_3],
  config: {
    screens: {
      ProductDetails: "product/:id",
      Tabs: {
        screens: {
          Home: Screens.Home,
          Favorites: Screens.Favorites,
          Cart: Screens.Cart,
        },
      },
    },
  },
};
