import {
  HeaderLink,
  HeaderWrapper,
  HeaderLinkWrapper,
} from "./styledComponents";
import { ROUTES_PATHS } from "@/presentation/config/routesConstants";
import { LINK_TEXT } from "./constants";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLinkWrapper>
        <HeaderLink to={ROUTES_PATHS.HOME}>{LINK_TEXT}</HeaderLink>
      </HeaderLinkWrapper>
    </HeaderWrapper>
  );
};
