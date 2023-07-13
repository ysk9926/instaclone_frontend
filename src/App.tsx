import { ThemeProvider, createGlobalStyle } from "styled-components";
import Router from "./Routes/Router";
import { Reset } from "styled-reset";
import { lightTheme } from "./theme";

const GolbalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }
`;

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GolbalStyle />
        <Reset />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
