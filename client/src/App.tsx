// Clinical Notebook / Editorial Study Desk: global shell keeps the study surface quiet and focused.
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import Gate, { isUnlocked } from "./components/Gate";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

export default function App() {
  const [unlocked, setUnlocked] = useState(() => isUnlocked());

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {unlocked ? <Home /> : <Gate onUnlock={() => setUnlocked(true)} />}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
