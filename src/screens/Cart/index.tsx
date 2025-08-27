import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from "react-native";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@redux/slice/cartSlice";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "@utils/colors";
import { globalStyles } from "@utils/globalStyles";

export default function CartScreen() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((s) => s.cart.items);

  const { width } = useWindowDimensions();
  const numColumns = width >= 768 ? 2 : 1;


  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDecrement = (itemId: string, currentQty: number) => {
    if (currentQty > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: currentQty - 1 }));
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.itemInfo}>
          <View style={styles.row}>
            <Text style={globalStyles.title}>{item.name}</Text>
          </View>
          <Text style={globalStyles.price}>${item.price.toFixed(2)}</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => handleDecrement(item.id, item.quantity)}
            >
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyValue}>{item.quantity}</Text>

            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() =>
                dispatch(
                  updateQuantity({ id: item.id, quantity: item.quantity + 1 })
                )
              }
            >
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.remove}
              onPress={() => dispatch(removeFromCart(item.id))}
            >
              <Ionicons name="trash" size={20} color={COLORS.danger} />
            </TouchableOpacity>
          </View>
        </View>

        <Image
          source={{ uri: item.image }}
          style={styles.itemImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}>Your cart is empty!</Text>
        </View>
      ) : (
        <>
          <FlatList
            key={numColumns}
            numColumns={numColumns}
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => dispatch(clearCart())}
            >
              <Ionicons
                style={styles.spaceRight}
                name="trash"
                size={20}
                color={COLORS.white}
              />
              <Text style={styles.clearText}>Clear Cart</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
