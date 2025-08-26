import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";
import { store, persistor } from "./src/redux/store";
import Navigation from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    ...Ionicons.font,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator style={styles.container} size="large" />;
  }

  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size="large" />}
        persistor={persistor}
      >
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <Navigation />
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
