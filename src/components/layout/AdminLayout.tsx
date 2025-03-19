
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Moon, Sun, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isRTL, setIsRTL] = useState(true);
  const { toast } = useToast();

  // Set RTL direction on mount
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = isRTL ? 'ar' : 'en';
  }, [isRTL]);

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toast({
      title: isRTL ? 'تم تغيير المظهر' : 'Theme Changed',
      description: isDarkMode
        ? (isRTL ? 'تم تفعيل الوضع النهاري' : 'Light mode activated')
        : (isRTL ? 'تم تفعيل الوضع الليلي' : 'Dark mode activated'),
      duration: 2000,
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={cn("flex min-h-screen bg-background", isRTL ? 'rtl' : 'ltr')}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} isRTL={isRTL} />

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-card/80 backdrop-blur-md px-6">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="md:hidden"
              aria-label={isRTL ? 'فتح/إغلاق القائمة الجانبية' : 'Toggle sidebar'}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="text-xl font-bold text-primary animate-fade-in">
              {isRTL ? 'بقالة بلس+' : 'Grocery Plus+'}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
              aria-label={isRTL ? 'تبديل المظهر' : 'Toggle theme'}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400 transition-all animate-scale-in" />
              ) : (
                <Moon className="h-5 w-5 transition-all animate-scale-in" />
              )}
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 animate-fade-in">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
