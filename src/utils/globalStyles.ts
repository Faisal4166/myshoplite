import { StyleSheet } from "react-native";
import { COLORS } from "@utils/colors";
import { DIMENSIONS, hp, wp } from "@utils/dimensions";

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: DIMENSIONS.fontM,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: DIMENSIONS.spacingXS,
  },
  price: {
    fontSize: DIMENSIONS.fontM,
    fontWeight: "600",
    color: COLORS.primary,
    marginVertical: DIMENSIONS.spacingXS,
  },
  description: {
    fontSize: DIMENSIONS.fontS,
    fontWeight: "400",
    color: COLORS.black,
    lineHeight: DIMENSIONS.isTablet ? 24 : 20,
    marginVertical: DIMENSIONS.spacingS,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: hp(1.6),
    paddingHorizontal: wp(4.5),
    borderRadius: wp(3),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp(1.5),
    marginHorizontal: wp(3),
  },
  addedButton: {
    backgroundColor: COLORS.disabled,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: DIMENSIONS.fontM,
    fontWeight: "600",
  },
  favButton: {
    paddingVertical: hp(1.7),
    borderRadius: wp(3),
    alignItems: "center",
    justifyContent: "center",
  },
  favActive: {
    backgroundColor: COLORS.danger,
  },
  favInactive: {
    backgroundColor: COLORS.primary,
  },
  baseButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    backgroundColor: COLORS.lightGray,
  },
});
