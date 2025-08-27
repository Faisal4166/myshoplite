import { COLORS } from "@utils/colors";
import { DIMENSIONS, hp, wp } from "@utils/dimensions";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(1.5),
    backgroundColor: COLORS.background,
    marginTop: DIMENSIONS.isAndroid ? hp(5) : hp(1),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  emptyText: {
    color: COLORS.disabledText,
    fontSize: wp(4),
    fontWeight: "500",
  },
});
