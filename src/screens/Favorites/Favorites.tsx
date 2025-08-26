import React, { useCallback, useMemo } from "react";
import { View, FlatList, Text } from "react-native";
import { useAppSelector } from "@redux/hooks";
import ProductCard from "@components/ProductCard/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "types/navigation";
import { styles } from "./styles";

export default function Favorites() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const favorites = useAppSelector((state) => state.favorites.ids);
  const products = useAppSelector((state) => state.products.items);

  const favoriteProducts = useMemo(
    () => products.filter((p) => favorites.includes(p.id)),
    [products, favorites]
  );

  const handlePress = useCallback(
    (id: string) => {
      navigation.navigate("ProductDetails", { id });
    },
    [navigation]
  );

  if (!favoriteProducts.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text
          accessible
          accessibilityLabel="No Favorites"
          style={styles.emptyText}
        >
          No favorites yet.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => handlePress(item.id)} />
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}
