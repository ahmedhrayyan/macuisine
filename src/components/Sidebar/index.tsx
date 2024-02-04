import logo from "@/assets/images/logo.svg";
import { CookingPot, HomeIcon } from "lucide-react";
import SidebarLink from "@/components/Sidebar/SidebarLink.tsx";
import { Sheet, SheetContent } from "@/components/ui/sheet.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import useLayout from "@/hooks/useLayout.ts";

export default function Sidebar() {
  const { onSidebarOpenChange, isSidebarOpen } = useLayout();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  if (isDesktop)
    return (
      <>
        {/*// sidebar placeholder*/}
        <div className="w-80" />
        <div className="fixed">
          <SidebarContent />
        </div>
      </>
    );

  return (
    <Sheet open={isSidebarOpen} onOpenChange={onSidebarOpenChange}>
      <SheetContent side="left" className="p-0 pt-6 w-80 bg-white">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}

function SidebarContent() {
  return (
    <aside className="w-80 h-[100vh] py-10 overflow-y-auto bg-white">
      <a href="/" className="block w-36 mb-20 mx-auto">
        <h1>
          <img src={logo} alt="Macuisine" width="1078" height="906" />
        </h1>
      </a>
      <nav className="w-full">
        <ul className="flex flex-col gap-8">
          <li>
            <SidebarLink to="/" end>
              <HomeIcon className="w-7 h-7" />
              Home
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to="/recipes">
              <CookingPot className="w-7 h-7" />
              Recipes
            </SidebarLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
