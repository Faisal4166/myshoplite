import { StyleSheet } from "react-native";
import { COLORS } from "@utils/colors";
import { hp, wp } from "@utils/dimensions";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  image: {
    width: "100%",
    height: hp(40),
    backgroundColor: COLORS.lightGray,
  },
  info: {
    padding: wp(5),
    backgroundColor: COLORS.white,
    marginTop: -hp(4),
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: hp(0.6) },
    shadowOpacity: 0.1,
    shadowRadius: wp(2.5),
    elevation: 5,
  },
});
