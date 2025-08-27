import { StyleSheet } from "react-native";
import { COLORS } from "@utils/colors";
import { moderateScale, scale, verticalScale } from "@utils/dimensions";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginVertical: verticalScale(8),
    marginHorizontal: scale(8),
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(12),
    overflow: "hidden",
    elevation: 3,
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowRadius: moderateScale(6),
  },
  compact: {
    marginHorizontal: scale(4),
  },
  image: {
    width: "100%",
    height: verticalScale(180),
    backgroundColor: COLORS.lightGray,
    borderTopLeftRadius: moderateScale(12),
    borderTopRightRadius: moderateScale(12),
  },
  info: {
    padding: moderateScale(12),
  },
});
