import { useTransition } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { MainWrapper } from "./layoutStyledComponents";

export const Layout = () => {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  const handleNavigation = (url: string) => () => {
    startTransition(() => {
      navigate(url);
    });
  };

  return (
    <MainWrapper>
      <Header isPending={isPending} />
      <Outlet
        context={{
          handleNavigation,
        }}
      />
    </MainWrapper>
  );
};

export interface OutletContext {
  handleNavigation: (url: string) => () => void;
}
