import styled from "styled-components";
import { FontProps } from "./contracts";
import { getTextFontSize } from "./utils";

export const Text = styled.span<FontProps>`
  font-size: ${({ fontSize }) => getTextFontSize(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "initial")};
  line-height: 24px;
  color: ${({ color }) => color};
  display: ${({ displayBlock }) => (displayBlock ? "block" : "auto")};
  ${({ ellipsis }) =>
    ellipsis &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  width: 100%;
  `};
`;
