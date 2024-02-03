import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import { LayoutProvider } from "@/contexts/ConfigContext.tsx";

export default function Layout() {
  return (
    <LayoutProvider>
      <div className="flex">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </LayoutProvider>
  );
}
