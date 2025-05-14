import { createBrowserRouter } from "react-router-dom";
import React from "react";

// 예시 컴포넌트
const Home = () => <div>홈</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
