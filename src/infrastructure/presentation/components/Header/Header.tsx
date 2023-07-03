import {
  HeaderLink,
  HeaderWrapper,
  HeaderLinkWrapper,
} from "./styledComponents";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLinkWrapper>
        <HeaderLink to="/">Podcasts</HeaderLink>
      </HeaderLinkWrapper>
    </HeaderWrapper>
  );
};
