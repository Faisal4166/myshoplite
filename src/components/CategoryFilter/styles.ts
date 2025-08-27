import { COLORS } from "@utils/colors";
import { StyleSheet } from "react-native";
import { globalStyles } from "@utils/globalStyles";
import { DIMENSIONS } from "@utils/dimensions";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: DIMENSIONS.spacingM,
    paddingVertical: DIMENSIONS.spacingS,
    overflow: "scroll",
    backgroundColor: COLORS.background,
  },
  webContainer: {
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },

  button: {
    ...globalStyles.baseButton,
    backgroundColor: COLORS.lightGray,
    borderRadius: DIMENSIONS.radiusL,
    margin: DIMENSIONS.spacingXS,
    paddingVertical: DIMENSIONS.spacingXS,
    paddingHorizontal: DIMENSIONS.spacingXS,
  },

  selected: {
    backgroundColor: COLORS.primary,
  },
  selectedText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: DIMENSIONS.fontM,
  },
});
