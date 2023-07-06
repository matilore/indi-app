import { COLORS } from "@/presentation/styles/constants";
import styled from "styled-components";
import { responsivePadding } from "@/presentation/styles/constants";

export const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  box-sizing: border-box;
  ${responsivePadding}
`;

export const SearchInput = styled.input`
  all: unset;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  padding: 8px;
`;

export const PodcastNumberBadge = styled.span`
  background-color: ${COLORS.BLUE};
  border-radius: 5px;
  color: ${COLORS.WHITE};
  display: flex;
  align-items: center;
  height: fit-content;
  margin-right: 16px;
  padding: 4px;
`;

export const SearchBarContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
