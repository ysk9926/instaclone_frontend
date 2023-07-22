import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import NotFound from "./NotFound";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { client, isLoggedInVar } from "./apollo";
import Home from "./pages/Home";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route path="/sign-up" element={isLoggedIn ? null : <SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
