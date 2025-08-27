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
import { Product } from "types/screens/product";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { toggleFavorite } from "@redux/slice/favoritesSlice";
import { fetchProductById } from "services/api";
import { styles } from "./styles";
import { RootStackParamList, Screens } from "types/navigation/rootStack";
import { globalStyles } from "@utils/globalStyles";

type Route = RouteProp<RootStackParamList, Screens.ProductDetails>;

export default function ProductDetails() {
  const route = useRoute<Route>();
  const param = route.params;
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((s) => s.favorites.ids);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
          style={globalStyles.title}
          accessible
          accessibilityLabel={`Product name: ${product.name}`}
        >
          {product.name}
        </Text>

        <Text
          style={globalStyles.price}
          accessible
          accessibilityLabel={`Product price: ${product.price}`}
        >
          ${product.price.toFixed(2)}
        </Text>

        <Text
          style={globalStyles.description}
          accessible
          accessibilityLabel={`Product description: ${product.description}`}
        >
          {product.description ?? "No description available."}
        </Text>

        <TouchableOpacity
          style={[
            globalStyles.favButton,
            isFav ? globalStyles.favActive : globalStyles.favInactive,
          ]}
          onPress={() => dispatch(toggleFavorite(product.id))}
          accessible
          accessibilityLabel={
            isFav ? "Remove from favorites" : "Add to favorites"
          }
        >
          <Text style={globalStyles.buttonText}>
            {isFav ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
