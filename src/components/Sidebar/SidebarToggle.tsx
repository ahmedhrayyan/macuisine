import { Button } from "@/components/ui/button.tsx";
import { MenuIcon } from "lucide-react";
import useLayout from "@/hooks/useLayout.ts";

export default function SidebarToggle() {
  const { onSidebarOpenChange } = useLayout();

  return (
    <Button
      size="icon"
      className="h-14 w-14 bg-white hover:bg-white text-primary shadow-lg lg:hidden"
      aria-label="Menu"
      onClick={() => onSidebarOpenChange((prev) => !prev)}
    >
      <MenuIcon className="w-7 h-7" />
    </Button>
  );
}
