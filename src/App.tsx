import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { DocLayout } from "./components/DocLayout";

// Documentation Pages
import Introduction from "./pages/docs/Introduction";
import Installation from "./pages/docs/Installation";
import QuickStart from "./pages/docs/QuickStart";
import ProjectStructure from "./pages/docs/ProjectStructure";
import Docker from "./pages/docs/Docker";
import Testing from "./pages/docs/Testing";
import Environment from "./pages/docs/Environment";
import Commands from "./pages/docs/Commands";
import Contributing from "./pages/docs/Contributing";
import Roadmap from "./pages/docs/Roadmap";
import License from "./pages/docs/License";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DocLayout />}>
              <Route index element={<Introduction />} />
              <Route path="installation" element={<Installation />} />
              <Route path="quick-start" element={<QuickStart />} />
              <Route path="project-structure" element={<ProjectStructure />} />
              <Route path="docker" element={<Docker />} />
              <Route path="testing" element={<Testing />} />
              <Route path="environment" element={<Environment />} />
              <Route path="commands" element={<Commands />} />
              <Route path="contributing" element={<Contributing />} />
              <Route path="roadmap" element={<Roadmap />} />
              <Route path="license" element={<License />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
