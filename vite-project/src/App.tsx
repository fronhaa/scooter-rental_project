import { defaultTheme } from "./styles/theme/DefaultTheme";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import { LoginProvider } from "./Context/LoginContext";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <LoginProvider>
            <Router />
          </LoginProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
