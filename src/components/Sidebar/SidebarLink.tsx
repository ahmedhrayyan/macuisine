import { NavLinkProps, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils.ts";

interface ISidebarLink extends NavLinkProps {}

export default function SidebarLink({ className, ...rest }: ISidebarLink) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'relative pe-4 ps-16 py-2.5 flex items-center gap-2.5 text-sm font-medium text-primary/50 hover:text-primary/75 after:content[""] after:w-1 after:absolute after:top-1.5 after:bottom-1.5 after:right-0 after:rounded-full after:transition-colors',
          isActive && "text-primary after:bg-primary hover:text-primary",
          className,
        )
      }
      {...rest}
    />
  );
}
