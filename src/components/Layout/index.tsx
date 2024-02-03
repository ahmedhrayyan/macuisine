import Header from "@/components/Header";
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
        <div className="container flex-grow px-8 py-12 lg:px-12 xl:px-16">
          <div className="mb-16">
            <Header />
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </LayoutProvider>
  );
}
