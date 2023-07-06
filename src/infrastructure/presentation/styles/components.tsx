import styled from "styled-components";
import { FontProps } from "./contracts";
import { getTextFontSize } from "./utils";
import { COLORS } from "./constants";

export const Text = styled.span<FontProps>`
  font-size: ${({ fontSize }) => getTextFontSize(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "initial")};
  line-height: 24px;
  color: ${({ color }) => color};
  display: ${({ displayBlock }) => (displayBlock ? "block" : "auto")};
  ${({ $ellipsis }) =>
    $ellipsis &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  width: 100%;
  `};
`;
export interface ImagePlaceholderProps {
  src: string;
}

export const ImagePlaceholder = styled.div<ImagePlaceholderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40% 50%;
  background-color: ${COLORS.LIGHT_GREY};
  z-index: 3;
`;
