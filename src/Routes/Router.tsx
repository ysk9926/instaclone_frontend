import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screen/Login/Home";
import Login from "../Screen/Login/Login";
import SignUp from "../Screen/Login/sign-up";
import NotFound from "../Screen/NotFound";
import { useRecoilValue } from "recoil";
import { loggedinState } from "../atom";

function Router() {
  const isLoggedIn = useRecoilValue(loggedinState);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/sign-up" element={!isLoggedIn ? <SignUp /> : null} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
