
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import AdminDashboard from "./pages/AdminDashboard";
import CreateInvitation from "./pages/CreateInvitation";
import PreviewTheme from "./pages/PreviewTheme";
import AllThemes from "./pages/AllThemes";
import NotFound from "./pages/NotFound";
import MochaTheme from "./pages/MochaTheme";
import OrderInvitation from "./pages/OrderInvitation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/create" element={<CreateInvitation />} />
          <Route path="/preview/:themeId" element={<PreviewTheme />} />
          <Route path="/themes" element={<AllThemes />} />
          <Route path="/mocha/:guestName" element={<MochaTheme />} />
          <Route path="/order-invitation" element={<OrderInvitation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
