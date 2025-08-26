import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "@types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "@utils/colors";
import ProductList from "@screens/ProductListing/ProductList";
import Favorites from "@screens/Favorites/Favorites";
import CartScreen from "@screens/Cart/CartScreen";

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const icons: Record<string, { focused: string; default: string }> = {
            Home: { focused: "home", default: "home-outline" },
            Favorites: { focused: "heart", default: "heart-outline" },
            Cart: { focused: "cart", default: "cart-outline" },
          };

          const iconName = focused
            ? icons[route.name].focused
            : icons[route.name].default;

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
      })}
    >
      <Tab.Screen name="Home" component={ProductList} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}
