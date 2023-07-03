import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "@/presentation/styles/constants";

export const HeaderLink = styled(Link)`
  color: ${COLORS.BLUE};
`;

export const HeaderLinkWrapper = styled.div`
  width: 80%;
`;

export const HeaderWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${COLORS.LIGHT_GREY};
`;
