import { COLORS } from "@utils/colors";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: COLORS.background,
    marginTop: Platform.OS === "android" ? 40 : 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  emptyText: {
    color: COLORS.disabledText,
    fontSize: 16,
    fontWeight: "500",
  },
});
