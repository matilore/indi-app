import { FONT_SIZES_TYPES, COLORS } from "./constants";

export type FontProps = {
  fontSize?: FontSize;
  fontWeight?: Weight;
  color?: Color;
  displayBlock?: boolean;
  $ellipsis?: boolean;
  $textAlign?: string;
};

type Weight = 400 | 500 | 700 | 800;

export type FontSize =
  | (typeof FONT_SIZES_TYPES)[keyof typeof FONT_SIZES_TYPES]
  | undefined;

export type Color = (typeof COLORS)[keyof typeof COLORS] | undefined;
