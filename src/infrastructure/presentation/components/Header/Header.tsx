import {
  HeaderLink,
  HeaderWrapper,
  HeaderLinkWrapper,
} from "./styledComponents";
import { ROUTES_PATHS } from "@/presentation/config/routesConstants";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLinkWrapper>
        <HeaderLink to={ROUTES_PATHS.HOME}>Podcasts</HeaderLink>
      </HeaderLinkWrapper>
    </HeaderWrapper>
  );
};
