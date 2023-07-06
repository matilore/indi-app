import {
  HeaderLink,
  HeaderWrapper,
  HeaderLinkWrapper,
  SpinnerWrapper,
  SpinnerIcon,
} from "./styledComponents";
import { ROUTES_PATHS } from "@/presentation/config/routesConstants";
import { LINK_TEXT } from "./constants";

export const Header = ({ isPending }: { isPending: boolean }) => {
  return (
    <HeaderWrapper>
      <HeaderLinkWrapper>
        <HeaderLink to={ROUTES_PATHS.HOME}>{LINK_TEXT}</HeaderLink>
        {isPending && (
          <SpinnerWrapper data-testid="spinner">
            <SpinnerIcon />
          </SpinnerWrapper>
        )}
      </HeaderLinkWrapper>
    </HeaderWrapper>
  );
};
