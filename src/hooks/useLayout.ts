import LayoutContext from "@/contexts/ConfigContext.tsx";
import { useContext } from "react";

export default function useLayout() {
  return useContext(LayoutContext);
}
