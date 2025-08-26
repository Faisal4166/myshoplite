import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 8,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  compact: {
    marginHorizontal: 4,
  },
  image: {
    width: "100%",
    height: 180,
    backgroundColor: COLORS.lightGray,
  },
  info: {
    padding: 12,
  },
  name: {
    color: COLORS.black,
    fontWeight: "600",
    fontSize: 16,
  },
  price: {
    marginTop: 6,
    fontWeight: "700",
    fontSize: 16,
    color: COLORS.primary,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: "center",
    margin: 12,
  },
  addedButton: {
    backgroundColor: COLORS.disabled,
  },
  addButtonText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 16,
  },
  addedButtonText: {
    color: COLORS.disabledText,
  },
});
