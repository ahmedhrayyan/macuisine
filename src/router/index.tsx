import Home from "@/routes/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import ErrorElement from "@/components/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipes",
        lazy: () => import("../routes/Recipes"),
        errorElement: <ErrorElement />,
      },
      {
        path: "recipes/:id",
        lazy: () => import("../routes/RecipeDetails"),
        errorElement: <ErrorElement />,
      },
      {
        path: "404",
        lazy: () => import("../routes/NotFound"),
        errorElement: <ErrorElement />,
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />,
      },
    ],
  },
]);

export default router;
