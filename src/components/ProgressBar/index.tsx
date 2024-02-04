import { useEffect } from "react";
import { removeProgress, startProgress } from "@/lib/progress.ts";

export default function ProgressBar() {
  useEffect(() => {
    startProgress();
    return () => {
      removeProgress();
    };
  }, []);
  return null;
}
