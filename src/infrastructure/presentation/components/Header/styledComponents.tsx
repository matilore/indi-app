import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "@/presentation/styles/constants";
import { responsivePadding } from "@/presentation/styles/constants";

export const HeaderLink = styled(Link)`
  color: ${COLORS.BLUE};
`;

export const HeaderLinkWrapper = styled.div`
  width: 100%;
  padding: 16px 30px;
  box-sizing: border-box;
`;

export const HeaderWrapper = styled.div`
  height: 50px;
  width: 100%;
  ${responsivePadding}

  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
