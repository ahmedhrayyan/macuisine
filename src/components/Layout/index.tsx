import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar open={open} onOpenChange={setOpen} />
      <div className="flex-grow p-12">
        <div className="mb-12">
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
