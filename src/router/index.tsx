import Home from "@/routes/Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";

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
      },
    ],
  },
]);

export default router;
