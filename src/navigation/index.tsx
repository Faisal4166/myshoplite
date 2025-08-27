import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "@utils/colors";
import { linking } from "./deepLinking";
import TabsNavigator from "./bottomTab";
import ProductDetails from "@screens/ProductDetails";
import { RootStackList, Screens } from "types/navigation/rootStack";

const Stack = createNativeStackNavigator<RootStackList>();

export default function Navigation() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: COLORS.white },
      }}
      linking={linking}
    >
      <Stack.Navigator initialRouteName={Screens.Tabs}>
        <Stack.Screen
          name={Screens.Tabs}
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screens.ProductDetails}
          component={ProductDetails}
          options={{ title: "Product" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
