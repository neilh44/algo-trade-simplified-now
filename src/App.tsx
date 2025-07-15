import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Admin Layout and Pages
import { AdminLayout } from "./components/admin/AdminLayout";
import { ProtectedAdminRoute } from "./components/admin/ProtectedAdminRoute";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { UserManagement } from "./pages/admin/UserManagement";
import { ResourceManagement } from "./pages/admin/ResourceManagement";

// Public Pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";

// Dashboard Pages (now standalone)
import Dashboard from "./pages/Dashboard";
import FreeCourses from "./pages/FreeCourses";
import Resources from "./pages/Resources";
import Progress from "./pages/Progress";
import LiveSessions from "./pages/LiveSessions";
import Profile from "./pages/Profile";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/FreeCourses" element={
              <ProtectedRoute>
                <FreeCourses />
              </ProtectedRoute>
            } />
            <Route path="/Resources" element={
              <ProtectedRoute>
                <Resources />
              </ProtectedRoute>
            } />
            <Route path="/Progress" element={
              <ProtectedRoute>
                <Progress />
              </ProtectedRoute>
            } />
            <Route path="/LiveSessions" element={
              <ProtectedRoute>
                <LiveSessions />
              </ProtectedRoute>
            } />
            <Route path="/Profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/Support" element={
              <ProtectedRoute>
                <Support />
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

            {/* Catch-All Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
