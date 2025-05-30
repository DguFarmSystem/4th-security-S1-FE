import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth";
import MainPage from "../pages/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
]);
