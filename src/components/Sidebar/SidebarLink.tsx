import { NavLinkProps, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils.ts";
import { useMediaQuery } from "@uidotdev/usehooks";

interface ISidebarLink extends NavLinkProps {}

export default function SidebarLink({ className, ...rest }: ISidebarLink) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "relative pe-4 ps-16 py-2.5 flex items-center gap-2.5 text-sm font-semibold text-primary/50 hover:text-primary/75 after:w-1 after:absolute after:top-1.5 after:bottom-1.5 after:transition-colors",
          isDesktop && "after:right-0",
          !isDesktop && "after:left-0",
          isActive && "text-primary after:bg-primary hover:text-primary",
          className,
        )
      }
      {...rest}
    />
  );
}
