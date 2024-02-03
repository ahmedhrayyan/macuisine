import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <Sidebar open={open} onOpenChange={setOpen} />
      </div>
      <div className="flex-grow px-8 py-12 lg:px-12">
        <div className="mb-16">
          <Header
            setSidebarOpenChange={setOpen}
            onSearch={(query) => {
              console.log(query);
            }}
          />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
