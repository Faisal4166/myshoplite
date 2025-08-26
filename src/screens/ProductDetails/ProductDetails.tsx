import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList, Product } from "@types";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { toggleFavorite } from "@redux/slice/favoritesSlice";
import { fetchProductById } from "services/api";
import { styles } from "./styles";

type Route = RouteProp<RootStackParamList, "ProductDetails">;

export default function ProductDetails() {
  const route = useRoute<Route>();
  const param = route.params;
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((s) => s.favorites.ids);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const productId =
    typeof param === "object" && "id" in param
      ? param.id
      : (param as any).product?.id;

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if ((param as any).product) {
        setProduct((param as any).product);
        return;
      }
      setLoading(true);
      try {
        const p = await fetchProductById(String(productId));
        if (mounted) setProduct(p ?? null);
      } catch (e) {
        Alert.alert("Error", "Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [productId, param]);

  if (loading || !product)
    return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  const isFav = favorites.includes(product.id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
        accessible
        accessibilityLabel={`Image of ${product.name}`}
      />

      <View style={styles.info}>
        <Text
          style={styles.title}
          accessible
          accessibilityLabel={`Product name: ${product.name}`}
        >
          {product.name}
        </Text>

        <Text
          style={styles.price}
          accessible
          accessibilityLabel={`Product price: ${product.price}`}
        >
          ${product.price.toFixed(2)}
        </Text>

        <Text
          style={styles.description}
          accessible
          accessibilityLabel={`Product description: ${product.description}`}
        >
          {product.description ?? "No description available."}
        </Text>

        <TouchableOpacity
          style={[
            styles.favButton,
            isFav ? styles.favActive : styles.favInactive,
          ]}
          onPress={() => dispatch(toggleFavorite(product.id))}
          accessible
          accessibilityLabel={
            isFav ? "Remove from favorites" : "Add to favorites"
          }
        >
          <Text style={styles.favText}>
            {isFav ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
