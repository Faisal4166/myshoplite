import { COLORS } from "@utils/colors";
import { Platform, StyleSheet } from "react-native";
import { wp, hp, DIMENSIONS } from "@utils/dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(1.5),
    backgroundColor: COLORS.background,
    marginTop: DIMENSIONS.isAndroid ? hp(5) : hp(1),
  },

  search: {
    marginHorizontal: wp(3),
    marginBottom: hp(1),
    padding: wp(2.5),
    borderRadius: DIMENSIONS.radiusM,
    backgroundColor: COLORS.white,
    marginTop: hp(0.8),
  },

  error: {
    color: COLORS.danger,
    paddingHorizontal: wp(3),
    marginBottom: hp(1),
    fontSize: DIMENSIONS.fontM,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyImage: {
    width: wp(50),
    height: hp(25),
    marginBottom: hp(1.5),
    resizeMode: "contain",
  },

  retryButton: {
    marginTop: hp(1.5),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.2),
    backgroundColor: COLORS.primary,
    borderRadius: DIMENSIONS.radiusM,
  },

  retryText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: DIMENSIONS.fontM,
  },

  filterText: {
    color: COLORS.black,
    fontWeight: "bold",
    marginLeft: wp(5),
    textDecorationLine: "underline",
    fontSize: DIMENSIONS.fontM,
  },
});
