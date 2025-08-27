import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const TABLET_MIN_WIDTH = 768;

export const wp = (percentage: number) => (width * percentage) / 100;
export const hp = (percentage: number) => (height * percentage) / 100;

export const isTablet = width >= TABLET_MIN_WIDTH;

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const RF = (size: number) => {
  const scale = width / 375;
  const newSize = size * scale;
  return Math.round(
    Platform.OS === "ios" ? Math.min(newSize, size + 4) : newSize
  );
};

export const DIMENSIONS = {
  screenWidth: width,
  screenHeight: height,
  isTablet,

  fontXS: moderateScale(isTablet ? 12 : 10),
  fontS: moderateScale(isTablet ? 14 : 12),
  fontM: moderateScale(isTablet ? 16 : 14),
  fontL: moderateScale(isTablet ? 20 : 18),
  fontXL: moderateScale(isTablet ? 24 : 22),
  fontXXL: moderateScale(isTablet ? 30 : 26),

  spacingXS: scale(4),
  spacingS: scale(8),
  spacingM: scale(12),
  spacingL: scale(16),
  spacingXL: scale(20),

  radiusS: scale(6),
  radiusM: scale(10),
  radiusL: scale(14),

  isIOS: Platform.OS === "ios",
  isAndroid: Platform.OS === "android",
  isWeb: Platform.OS === "web",
};
