import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "../Screen/NotFound";
import Login from "../Screen/Login";
import Home from "../Screen/Home";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default rootRouter;
