
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/layout/AdminLayout";
import DashboardPage from "./components/dashboard/DashboardPage";
import ProductsPage from "./components/products/ProductsPage";
import OrdersPage from "./components/orders/OrdersPage";
import CustomersPage from "./components/customers/CustomersPage";
import ReportsPage from "./components/reports/ReportsPage";
import SettingsPage from "./components/settings/SettingsPage";

const queryClient = new QueryClient();

const App = () => {
  // Apply RTL at mount
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Admin Panel Routes */}
            <Route 
              path="/dashboard" 
              element={
                <AdminLayout>
                  <DashboardPage />
                </AdminLayout>
              } 
            />
            <Route 
              path="/products" 
              element={
                <AdminLayout>
                  <ProductsPage />
                </AdminLayout>
              } 
            />
            <Route 
              path="/orders" 
              element={
                <AdminLayout>
                  <OrdersPage />
                </AdminLayout>
              } 
            />
            <Route 
              path="/customers" 
              element={
                <AdminLayout>
                  <CustomersPage />
                </AdminLayout>
              } 
            />
            <Route 
              path="/reports" 
              element={
                <AdminLayout>
                  <ReportsPage />
                </AdminLayout>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <AdminLayout>
                  <SettingsPage />
                </AdminLayout>
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
