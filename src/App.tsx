import { RouterProvider } from "react-router-dom";
import router from "@/router";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />;
      <Toaster />
    </div>
  );
}

export default App;
