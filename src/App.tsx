import { ThemeProvider, createGlobalStyle } from "styled-components";
import Router from "./Routes/Router";
import { Reset } from "styled-reset";
import { darkTheme, lightTheme } from "./theme";
import { HelmetProvider } from "react-helmet-async";
import { useRecoilState } from "recoil";
import { isDarkState } from "./atom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

const GolbalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }
    input{
      border: none;
    }
`;

function App() {
  const isDark = useRecoilState(isDarkState);
  return (
    <>
      <ApolloProvider client={client}>
        <HelmetProvider>
          <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
            <GolbalStyle />
            <Reset />
            <Router />
          </ThemeProvider>
        </HelmetProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
