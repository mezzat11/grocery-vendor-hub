
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background rtl">
      <div className="text-center space-y-6 p-8 glass-card rounded-2xl max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <div className="space-y-2">
          <p className="text-2xl font-semibold text-foreground">عفواً، الصفحة غير موجودة</p>
          <p className="text-muted-foreground">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها
          </p>
        </div>
        <Button 
          className="gap-2"
          onClick={() => navigate('/dashboard')}
        >
          <Home className="h-4 w-4" />
          <span>العودة إلى لوحة التحكم</span>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
