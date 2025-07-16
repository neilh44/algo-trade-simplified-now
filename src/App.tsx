import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AdminLayout } from "./components/admin/AdminLayout";
import { ProtectedAdminRoute } from "./components/admin/ProtectedAdminRoute";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { UserManagement } from "./pages/admin/UserManagement";
import { ResourceManagement } from "./pages/admin/ResourceManagement";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Documentation from "./pages/Documentation";
import APIReference from "./pages/APIReference";
import Tutorials from "./pages/Tutorials";
import VideoGuides from "./pages/VideoGuides";
import StrategyTemplates from "./pages/StrategyTemplates";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/HelpCenter";
import ContactSupport from "./pages/ContactSupport";
import InteractiveDemo from "./pages/InteractiveDemo";
import ScheduleDemo from "./pages/ScheduleDemo";
import ContactUs from "./pages/ContactUs";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            
            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <ProtectedAdminRoute>
                  <AdminLayout />
                </ProtectedAdminRoute>
              </ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="resources" element={<ResourceManagement />} />
              <Route path="activities" element={<div className="p-6">Activities Page (Coming Soon)</div>} />
              <Route path="support" element={<div className="p-6">Support Page (Coming Soon)</div>} />
              <Route path="upload" element={<div className="p-6">Upload Page (Coming Soon)</div>} />
            </Route>
            
            {/* Documentation & Resources Routes */}
            <Route path="/docs" element={<Documentation />} />
            <Route path="/api-reference" element={<APIReference />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/video-guides" element={<VideoGuides />} />
            <Route path="/strategy-templates" element={<StrategyTemplates />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Support Routes */}
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/contact" element={<ContactSupport />} />
            
            {/* Landing Page CTA Routes */}
            <Route path="/interactive-demo" element={<InteractiveDemo />} />
            <Route path="/schedule-demo" element={<ScheduleDemo />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/case-study" element={<CaseStudy />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
