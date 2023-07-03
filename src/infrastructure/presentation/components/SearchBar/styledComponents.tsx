import { COLORS } from "@/presentation/styles/constants";
import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: flex-end;
`;

export const SearchInput = styled.input`
  all: unset;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  padding: 8px;
`;

export const PodcastNumberBadge = styled.span`
  background-color: ${COLORS.BLUE};
`;
