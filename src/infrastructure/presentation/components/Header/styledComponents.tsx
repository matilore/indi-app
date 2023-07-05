import styled, { keyframes } from "styled-components";
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  z-index: 2;
`;

export const SpinnerIcon = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spinAnimation} 1s linear infinite;
`;
