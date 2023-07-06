import { RouterProvider } from "react-router-dom";
import { router } from "@/infrastructure/presentation/config/routes";
import { GlobalStyle } from "@/infrastructure/presentation/styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
