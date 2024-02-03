import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.tsx";
import { Input } from "../ui/input";
import { MenuIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

interface IFormInputs {
  search: string;
}

interface IHeaderProps {
  onSearch: (query: string) => void;
  setSidebarOpenChange: (state: boolean) => void;
}

export default function Header({ onSearch, setSidebarOpenChange }: IHeaderProps) {
  const form = useForm<IFormInputs>();

  return (
    <header className="flex gap-4">
      <Button
        size="icon"
        className="h-14 w-14 bg-white hover:bg-white text-primary shadow-lg lg:hidden"
        aria-label="Menu"
        onClick={() => setSidebarOpenChange(true)}
      >
        <MenuIcon className="w-7 h-7" />
      </Button>
      <Form {...form}>
        <form
          className="flex-grow"
          onSubmit={
            void form.handleSubmit((data) => {
              onSearch(data.search);
            })
          }
        >
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormLabel hidden>Search</FormLabel>
                <div className="relative">
                  <SearchIcon className="w-5 h-5 absolute z-10 top-1/2 left-5 transform -translate-y-1/2 text-primary" />
                  <FormControl className="relative">
                    <Input
                      type="search"
                      required
                      placeholder="What do you want to cock today ?"
                      {...field}
                      className="h-14 text-base ps-14 border-transparent shadow-lg"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </header>
  );
}
