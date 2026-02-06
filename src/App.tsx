import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import JobWorkspace from "./pages/JobWorkspace";
import Candidates from "./pages/Candidates";
import Interviews from "./pages/Interviews";
import PipelineTemplates from "./pages/PipelineTemplates";
import QuestionBank from "./pages/QuestionBank";
import Activity from "./pages/Activity";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell><Dashboard /></AppShell>} />
          <Route path="/jobs" element={<AppShell><Jobs /></AppShell>} />
          <Route path="/jobs/:id" element={<JobWorkspace />} />
          <Route path="/candidates" element={<AppShell><Candidates /></AppShell>} />
          <Route path="/interviews" element={<AppShell><Interviews /></AppShell>} />
          <Route path="/pipelines" element={<AppShell><PipelineTemplates /></AppShell>} />
          <Route path="/questions" element={<AppShell><QuestionBank /></AppShell>} />
          <Route path="/activity" element={<AppShell><Activity /></AppShell>} />
          <Route path="/notifications" element={<AppShell><Notifications /></AppShell>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
