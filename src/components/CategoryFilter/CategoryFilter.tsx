import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Platform,
} from "react-native";
import { styles } from "./styles";

type Props = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: Props) {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";
  const buttonWidth = isWeb ? Math.min(150, width / 6) : 100;

  return (
    <View style={[styles.container, isWeb && styles.webContainer]}>
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
              styles.text,
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
