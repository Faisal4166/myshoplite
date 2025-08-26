import React from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { Product } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slice/cartSlice";
import { styles } from "./styles";

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
          style={styles.name}
          numberOfLines={1}
          accessible
          accessibilityLabel={`Product name: ${product.name}`}
        >
          {product.name}
        </Text>
        <Text
          style={styles.price}
          accessible
          accessibilityLabel={`Product price: $${product.price}`}
        >
          ${product.price}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.addButton, isAdded && styles.addedButton]}
        onPress={() => !isAdded && dispatch(addToCart(product))}
        disabled={isAdded}
        accessible
        accessibilityLabel={isAdded ? "Added to cart" : "Add to cart"}
      >
        <Text style={[styles.addButtonText, isAdded && styles.addedButtonText]}>
          {isAdded ? "Added" : "Add to Cart"}
        </Text>
      </TouchableOpacity>
    </Pressable>
  );
}
