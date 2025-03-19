
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  ShoppingBasket,
  ShoppingCart,
  Users,
  BarChart,
  Settings,
  ChevronRight,
  ChevronLeft,
  Package,
  LogOut,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SidebarProps {
  isOpen: boolean;
  isRTL: boolean;
}

export const Sidebar = ({ isOpen, isRTL }: SidebarProps) => {
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: isRTL ? 'تسجيل الخروج' : 'Logout',
      description: isRTL ? 'تم تسجيل الخروج بنجاح' : 'Successfully logged out',
      variant: 'default',
    });
  };

  const navigationItems = [
    {
      title: isRTL ? 'لوحة التحكم' : 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: isRTL ? 'إدارة المنتجات' : 'Products',
      path: '/products',
      icon: Package,
    },
    {
      title: isRTL ? 'إدارة الطلبات' : 'Orders',
      path: '/orders',
      icon: ShoppingBasket,
    },
    {
      title: isRTL ? 'إدارة العملاء' : 'Customers',
      path: '/customers',
      icon: Users,
    },
    {
      title: isRTL ? 'التقارير والتحليلات' : 'Reports',
      path: '/reports',
      icon: BarChart,
    },
    {
      title: isRTL ? 'الإعدادات' : 'Settings',
      path: '/settings',
      icon: Settings,
    },
  ];

  return (
    <aside
      className={cn(
        'sidebar-container fixed md:relative inset-y-0 left-0 z-40 flex w-64 flex-col bg-sidebar dark:bg-sidebar overflow-hidden transition-all duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : isRTL ? 'translate-x-64' : '-translate-x-64',
        isRTL ? (isOpen ? 'right-0' : '-right-64 translate-x-0') : '',
        'md:translate-x-0'
      )}
    >
      {/* Sidebar Header */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-sidebar-foreground">
            {isRTL ? 'بقالة بلس+' : 'Grocery Plus+'}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-auto p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'nav-item',
                    isActive && 'active',
                    'group',
                    isRTL && 'flex-row-reverse'
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                <span className="flex-1">{item.title}</span>
                {isRTL ? (
                  <ChevronLeft className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                ) : (
                  <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-10 w-10 border border-primary/20">
            <AvatarImage src="/placeholder.svg" alt="User avatar" />
            <AvatarFallback>مد</AvatarFallback>
          </Avatar>
          <div className={cn("flex-1", isRTL && "text-right")}>
            <div className="text-sm font-medium">محمد عبدالله</div>
            <div className="text-xs text-muted-foreground">مدير</div>
          </div>
        </div>
        
        <Separator className="my-2" />
        
        <Button 
          variant="ghost" 
          className={cn(
            "w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10", 
            isRTL && "flex-row-reverse"
          )}
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          <span>{isRTL ? 'تسجيل الخروج' : 'Logout'}</span>
        </Button>
      </div>
    </aside>
  );
};
