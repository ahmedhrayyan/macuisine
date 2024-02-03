import { FormItem } from "@/components/ui/form.tsx";
import { Input } from "../ui/input";
import { MenuIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import useLayout from "@/hooks/useLayout.ts";
import { useTransition } from "react";

export default function Header() {
  const { onQueryChange, query, onSidebarOpenChange } = useLayout();
  const [, startTransition] = useTransition();

  return (
    <header className="flex gap-4">
      <Button
        size="icon"
        className="h-14 w-14 bg-white hover:bg-white text-primary shadow-lg lg:hidden"
        aria-label="Menu"
        onClick={() => onSidebarOpenChange(true)}
      >
        <MenuIcon className="w-7 h-7" />
      </Button>
      <FormItem className="flex-grow">
        <div className="relative">
          <SearchIcon className="w-5 h-5 absolute z-10 top-1/2 left-5 transform -translate-y-1/2 text-primary" />
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <Input
            id="search"
            value={query}
            onChange={(e) => {
              startTransition(() => {
                onQueryChange(e.target.value);
              });
            }}
            type="search"
            placeholder="What do you want to cock today ?"
            className="h-14 text-base ps-14 border-transparent shadow-lg"
          />
        </div>
      </FormItem>
    </header>
  );
}
