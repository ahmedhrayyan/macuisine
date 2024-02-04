import { Button, ButtonProps } from "@/components/ui/button.tsx";
import { MenuIcon } from "lucide-react";
import useLayout from "@/hooks/useLayout.ts";
import { cn } from "@/lib/utils.ts";

interface ISidebarToggle extends ButtonProps {}

export default function SidebarToggle({ className, ...rest }: ISidebarToggle) {
  const { onSidebarOpenChange } = useLayout();

  return (
    <Button
      size="icon"
      className={cn("h-14 w-14 bg-white hover:bg-white text-primary shadow-lg lg:hidden", className)}
      aria-label="Menu"
      onClick={() => onSidebarOpenChange((prev) => !prev)}
      {...rest}
    >
      <MenuIcon className="w-7 h-7" />
    </Button>
  );
}
