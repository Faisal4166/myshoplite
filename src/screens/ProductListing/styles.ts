import { COLORS } from "@utils/colors";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: COLORS.background,
    marginTop: Platform.OS === 'android' ? 40 : 1,
  },
  search: {
    marginHorizontal: 12,
    marginBottom: 8,
    padding: 10,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    marginTop: 6,
  },
  error: { color: "red", paddingHorizontal: 12, marginBottom: 8 },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyImage: { width: 200, height: 200, marginBottom: 12 },
  retryButton: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  retryText: { color: COLORS.white, fontWeight: "bold" },
  filterText: {
    color: COLORS.black,
    fontWeight: "bold",
    marginLeft: 20,
    textDecorationLine: "underline",
  },
});
