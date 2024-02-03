import logo from "@/assets/images/logo.svg";
import { CookingPot, HomeIcon } from "lucide-react";
import SidebarLink from "@/components/Sidebar/SidebarLink.tsx";
import { Sheet, SheetContent } from "@/components/ui/sheet.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";

interface ISidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Sidebar(props: ISidebarProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) return <SidebarContent />;

  return (
    <Sheet {...props}>
      <SheetContent side="left" className="p-0 w-80">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}

function SidebarContent() {
  return (
    <aside className="w-80 h-[100vh] py-10 overflow-y-auto bg-white">
      <h1 className="mb-20 text-center">
        <a href="/" className="w-36">
          <img src={logo} alt="Macuisine" />
        </a>
      </h1>
      <nav className="w-full">
        <ul className="flex flex-col gap-8">
          <li>
            <SidebarLink to="/" end>
              <HomeIcon />
              Home
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to="/recipes">
              <CookingPot />
              Recipes
            </SidebarLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
