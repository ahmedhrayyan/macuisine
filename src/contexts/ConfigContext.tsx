import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ILayoutContext {
  isSidebarOpen: boolean;
  onSidebarOpenChange: Dispatch<SetStateAction<boolean>>;
}

export const LayoutContext = createContext<ILayoutContext>({
  isSidebarOpen: false,
  onSidebarOpenChange: () => {},
});

export default LayoutContext;

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        isSidebarOpen,
        onSidebarOpenChange: setIsSidebarOpen,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
