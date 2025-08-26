import { COLORS } from "@utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10,
    overflow: "scroll",
    backgroundColor: COLORS.background,
  },
  webContainer: {
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  button: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 24,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  selected: {
    backgroundColor: COLORS.primary,
  },
  text: {
    color: COLORS.black,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  selectedText: {
    color: COLORS.white,
    fontWeight: "600",
  },
});
