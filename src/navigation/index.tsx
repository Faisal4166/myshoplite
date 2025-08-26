import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, TabsParamList } from "../types";
import { COLORS } from "@utils/colors";
import { linking } from "./deepLinking";
import TabsNavigator from "./TabNav";
import ProductDetails from "@screens/ProductDetails/ProductDetails";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: COLORS.white },
      }}
      linking={linking}
    >
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ title: "Product" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
