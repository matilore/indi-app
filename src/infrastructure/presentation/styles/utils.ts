import { FONT_SIZES, FONT_SIZES_TYPES } from "./constants";
import { FontSize } from "./contracts";

export const getTextFontSize = (fontSize: FontSize) => {
  switch (fontSize) {
    case FONT_SIZES_TYPES.EXTRA_SMALL:
      return FONT_SIZES.EXTRA_SMALL;
    case FONT_SIZES_TYPES.SMALL:
      return FONT_SIZES.SMALL;
    case FONT_SIZES_TYPES.MEDIUM:
      return FONT_SIZES.MEDIUM;
    case FONT_SIZES_TYPES.LARGE:
      return FONT_SIZES.LARGE;
    case FONT_SIZES_TYPES.EXTRA_LARGE:
      return FONT_SIZES.EXTRA_LARGE;
    default:
      return FONT_SIZES.MEDIUM;
  }
};
