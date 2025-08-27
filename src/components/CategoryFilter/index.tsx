import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { styles } from "./styles";
import { CategoryFilterProps } from "types/components/categoryFilter";
import { globalStyles } from "@utils/globalStyles";
import { DIMENSIONS } from "@utils/dimensions";

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: CategoryFilterProps) {
  const { width } = useWindowDimensions();
  const buttonWidth = DIMENSIONS.isWeb ? Math.min(150, width / 6) : 100;

  return (
    <View style={[styles.container, DIMENSIONS.isWeb && styles.webContainer]}>
      {categories.map((cat) => (
        <TouchableOpacity
          testID={`category-${cat}`}
          key={cat}
          style={[
            styles.button,
            { width: buttonWidth },
            selectedCategory === cat && styles.selected,
          ]}
          onPress={() => onSelect(cat)}
          accessible
          accessibilityLabel={`Filter by ${cat}`}
        >
          <Text
            style={[
              globalStyles.title,
              selectedCategory === cat && styles.selectedText,
            ]}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
