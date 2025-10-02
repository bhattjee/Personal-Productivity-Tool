import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Todos from "./pages/Todos";
import Habits from "./pages/Habits";
import Alarms from "./pages/Alarms";
import Journal from "./pages/Journal";
import Gym from "./pages/Gym";
import Running from "./pages/Running";
import Bedtime from "./pages/Bedtime";
import Streaks from "./pages/Streaks";
import Quotes from "./pages/Quotes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Dashboard />} />
            <Route path="todos" element={<Todos />} />
            <Route path="habits" element={<Habits />} />
            <Route path="alarms" element={<Alarms />} />
            <Route path="journal" element={<Journal />} />
            <Route path="gym" element={<Gym />} />
            <Route path="running" element={<Running />} />
            <Route path="bedtime" element={<Bedtime />} />
            <Route path="streaks" element={<Streaks />} />
            <Route path="quotes" element={<Quotes />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
