import { createContext, ReactNode, useState } from "react";

interface ILayoutContext {
  isSidebarOpen: boolean;
  onSidebarOpenChange: (isOpen: boolean) => void;
  query: string;
  onQueryChange: (query: string) => void;
}

export const LayoutContext = createContext<ILayoutContext>({
  isSidebarOpen: false,
  onSidebarOpenChange: () => {},
  query: "",
  onQueryChange: () => {},
});

export default LayoutContext;

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <LayoutContext.Provider
      value={{
        isSidebarOpen,
        onSidebarOpenChange: setIsSidebarOpen,
        query: query,
        onQueryChange: setQuery,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
