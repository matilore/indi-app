import { css } from "styled-components";

const BLACK = "#000000";
const DARK_GREY = "#6A6F85";
const GREY = "#B4BABD";
const WHITE = "#FFFFFF";
const LIGHT_GREY = "#FAFAFC;";
const BLUE = "#2596be";

export const COLORS = {
  BLACK,
  GREY,
  DARK_GREY,
  WHITE,
  LIGHT_GREY,
  BLUE,
};

export const FONT_SIZES = {
  EXTRA_SMALL: "12px",
  SMALL: "14px",
  MEDIUM: "16px",
  LARGE: "20px",
  EXTRA_LARGE: "24px",
};

export const FONT_SIZES_TYPES = {
  EXTRA_SMALL: "extraSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  EXTRA_LARGE: "extraLarge",
};

const BREAKPOINTS = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const MAX_PODCAST_MENU_WIDTH = {
  xs: "224px",
  sm: "472px",
  md: "720px",
  lg: "968px",
  xl: "1216px",
};

export const DEVICES = {
  xs: `(min-width: ${BREAKPOINTS.xs})`,
  sm: `(min-width: ${BREAKPOINTS.sm})`,
  md: `(min-width: ${BREAKPOINTS.md})`,
  lg: `(min-width: ${BREAKPOINTS.lg})`,
  xl: `(min-width: ${BREAKPOINTS.xl})`,
};

export const PADDING = {
  xs: `8px calc((100% - ${MAX_PODCAST_MENU_WIDTH.xs})/2)`,
  sm: `8px calc((100% - ${MAX_PODCAST_MENU_WIDTH.sm})/2)`,
  md: `8px calc((100% - ${MAX_PODCAST_MENU_WIDTH.md})/2)`,
  lg: `8px calc((100% - ${MAX_PODCAST_MENU_WIDTH.lg})/2)`,
  xl: `8px calc((100% - ${MAX_PODCAST_MENU_WIDTH.xl})/2)`,
};

export const responsivePadding = css`
  padding: ${PADDING.xs};

  @media only screen and ${DEVICES.sm} {
    padding: ${PADDING.sm};
  }

  @media only screen and ${DEVICES.md} {
    padding: ${PADDING.md};
  }

  @media only screen and ${DEVICES.lg} {
    padding: ${PADDING.lg};
  }

  @media only screen and ${DEVICES.xl} {
    padding: ${PADDING.xl};
  }
`;
