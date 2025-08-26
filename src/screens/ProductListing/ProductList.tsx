import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  Text,
  useWindowDimensions,
  RefreshControl,
  Image,
  TouchableOpacity,
} from "react-native";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { fetchProducts } from "@redux/slice/productsSlice";
import ProductCard from "@components/ProductCard/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../types/navigation";
import { IMAGES } from "@utils/images";
import CategoryFilter from "@components/CategoryFilter/CategoryFilter";
import { styles } from "./styles";

export default function ProductList() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((s) => s.products);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [refreshing, setRefreshing] = useState(false);

  const { width } = useWindowDimensions();
  const numColumns = width >= 768 ? 2 : 1;

  useEffect(() => {
    if (!items.length) loadProducts();
  }, [dispatch]);

  const loadProducts = async () => {
    try {
      await dispatch(fetchProducts());
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadProducts();
    setRefreshing(false);
    setSearch('');
  };

  const handlePress = useCallback(
    (id: string) => {
      navigation.navigate("ProductDetails", { id });
    },
    [navigation]
  );

  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(items.map((p) => p.category).filter(Boolean))
    ) as string[];
    return ["All", ...cats];
  }, [items]);

  const filtered = useMemo(() => {
    let data = items;
    if (search) {
      data = data.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (selectedCategory !== "All") {
      data = data.filter((p) => p.category === selectedCategory);
    }
    return data;
  }, [items, search, selectedCategory]);

  if (loading && !items.length) {
    return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search products"
        style={styles.search}
        accessibilityLabel="Search products"
        accessible={true}
      />

      {error ? (
        <Text
          accessible={true}
          accessibilityLabel="Error message"
          style={styles.error}
        >
          {error}
        </Text>
      ) : null}

      {!filtered.length ? (
        <View style={styles.emptyContainer}>
          <Image
            source={IMAGES.not_found}
            style={styles.emptyImage}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel="No products found"
          />
          <TouchableOpacity
            onPress={onRefresh}
            style={styles.retryButton}
            accessible={true}
            accessibilityLabel="Retry fetching products"
          >
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={styles.filterText}>Filters</Text>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <FlatList
            key={numColumns}
            data={filtered}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onPress={() => handlePress(item.id)}
              />
            )}
            contentContainerStyle={{ paddingBottom: 32 }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </>
      )}
    </View>
  );
}
