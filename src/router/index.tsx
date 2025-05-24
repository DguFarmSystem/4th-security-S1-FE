import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Auth from "../pages/Auth";
import MainPage from "../pages/MainPage";
import Mypage from "../pages/Mypage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/mypage",
    element: <Mypage />,
  },
]);
