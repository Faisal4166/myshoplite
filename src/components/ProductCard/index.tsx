import React from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { Product } from "../../types/screens/product";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slice/cartSlice";
import { styles } from "./styles";
import { globalStyles } from "@utils/globalStyles";

type Props = {
  product: Product;
  onPress?: () => void;
  compact?: boolean;
};

export default function ProductCard({
  product,
  onPress,
  compact = false,
}: Props) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((s) => s.cart.items);
  const isAdded = cartItems.some((item) => item.id === product.id);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, compact && styles.compact]}
      accessible
      accessibilityLabel={`Product card: ${product.name}`}
      accessibilityRole="button"
    >
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
        accessible
        accessibilityLabel={`Product image: ${product.name}`}
      />
      <View style={styles.info}>
        <Text
          style={globalStyles.title}
          numberOfLines={1}
          accessible
          accessibilityLabel={`Product name: ${product.name}`}
        >
          {product.name}
        </Text>
        <Text
          style={globalStyles.price}
          accessible
          accessibilityLabel={`Product price: $${product.price}`}
        >
          ${product.price}
        </Text>
      </View>

      <TouchableOpacity
        style={[globalStyles.addButton, isAdded && globalStyles.addedButton]}
        onPress={() => !isAdded && dispatch(addToCart(product))}
        disabled={isAdded}
        accessible
        accessibilityLabel={isAdded ? "Added to cart" : "Add to cart"}
      >
        <Text
          style={[
            globalStyles.buttonText,
            isAdded && globalStyles.buttonText,
          ]}
        >
          {isAdded ? "Added" : "Add to Cart"}
        </Text>
      </TouchableOpacity>
    </Pressable>
  );
}
