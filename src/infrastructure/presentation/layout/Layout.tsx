import { Header } from "../components/Header";
import { MainWrapper } from "./layoutStyledComponents";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <MainWrapper>
      <Header />
      <Outlet />
    </MainWrapper>
  );
};
