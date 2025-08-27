import { COLORS } from "@utils/colors";
import { DIMENSIONS, hp, wp } from "@utils/dimensions";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DIMENSIONS.spacingL,
    backgroundColor: COLORS.background,
    marginTop: DIMENSIONS.isAndroid ? hp(5) : hp(1),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    minWidth: 0,
    backgroundColor: COLORS.white,
    borderRadius: DIMENSIONS.radiusM,
    padding: DIMENSIONS.spacingL,
    marginBottom: DIMENSIONS.spacingM,
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: DIMENSIONS.isWeb ? DIMENSIONS.spacingS : 0,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(0.8),
    borderRadius: DIMENSIONS.radiusS,
    minWidth: DIMENSIONS.isTablet ? wp(10) : wp(7),
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: {
    color: COLORS.white,
    fontSize: DIMENSIONS.fontM,
    fontWeight: "bold",
  },
  qtyValue: {
    marginHorizontal: DIMENSIONS.spacingM,
    fontSize: DIMENSIONS.fontM,
    color: COLORS.black,
  },
  itemImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: DIMENSIONS.radiusS,
    backgroundColor: COLORS.background,
  },
  footer: {
    width: "100%",
    padding: DIMENSIONS.spacingL,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderColor: COLORS.gray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  total: {
    fontSize: DIMENSIONS.fontL,
    fontWeight: "bold",
    marginBottom: DIMENSIONS.spacingS,
    color: COLORS.black,
  },
  clearButton: {
    backgroundColor: COLORS.danger,
    paddingVertical: DIMENSIONS.spacingM,
    paddingHorizontal: DIMENSIONS.spacingL,
    borderRadius: DIMENSIONS.radiusM,
    alignItems: "center",
    minWidth: wp(32),
    flexDirection: "row",
  },
  clearText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: DIMENSIONS.fontM,
  },
  spaceRight: {
    marginRight: DIMENSIONS.spacingS,
  },
  empty: {
    color: COLORS.disabledText,
    fontSize: DIMENSIONS.fontM,
    fontWeight: "500",
  },
  itemInfo: {
    flex: 1,
    paddingRight: DIMENSIONS.spacingM,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: DIMENSIONS.spacingS,
  },
  remove: {
    fontSize: DIMENSIONS.fontL,
    color: COLORS.danger,
    marginLeft: DIMENSIONS.spacingL,
    borderColor: COLORS.danger,
  },
});
