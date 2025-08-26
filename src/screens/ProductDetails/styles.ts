import { StyleSheet } from "react-native";
import { COLORS } from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  image: {
    width: "100%",
    height: 350,
    backgroundColor: COLORS.lightGray,
  },
  info: {
    padding: 20,
    backgroundColor: COLORS.white,
    marginTop: -30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    color: COLORS.primary,
    fontWeight: "700",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 20,
    lineHeight: 22,
  },
  favButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  favActive: {
    backgroundColor: COLORS.danger,
  },
  favInactive: {
    backgroundColor: COLORS.primary,
  },
  favText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});
