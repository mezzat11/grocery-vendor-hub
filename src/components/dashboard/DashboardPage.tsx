
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Package, TrendingUp, AlertTriangle, Users, Percent } from 'lucide-react';

// Sample data
const revenueData = [
  { name: 'السبت', amount: 1200 },
  { name: 'الأحد', amount: 1900 },
  { name: 'الاثنين', amount: 800 },
  { name: 'الثلاثاء', amount: 1600 },
  { name: 'الأربعاء', amount: 2200 },
  { name: 'الخميس', amount: 1800 },
  { name: 'الجمعة', amount: 2400 },
];

const categoryData = [
  { name: 'خضروات', value: 35 },
  { name: 'فواكه', value: 25 },
  { name: 'لحوم', value: 20 },
  { name: 'منتجات الألبان', value: 15 },
  { name: 'معلبات', value: 5 }
];

const topSellingProducts = [
  { name: 'طماطم طازجة', sales: 120, category: 'خضروات' },
  { name: 'موز', sales: 98, category: 'فواكه' },
  { name: 'حليب كامل الدسم', sales: 85, category: 'منتجات الألبان' },
  { name: 'لحم بقري مفروم', sales: 72, category: 'لحوم' },
  { name: 'خيار', sales: 65, category: 'خضروات' },
];

const COLORS = ['#4ECDC4', '#FF6B6B', '#292F36', '#F7F7F2', '#A3A38B'];

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">لوحة التحكم الرئيسية</h1>
        <Badge variant="outline" className="animated-badge">
          <TrendingUp className="h-3.5 w-3.5 mr-1" />
          <span>تحديث مباشر</span>
        </Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Orders */}
        <Card className="stat-card">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي الطلبات</CardTitle>
              <ShoppingCart className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2,345</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-emerald-500 font-medium">↑ 12%</span> مقارنة بالأسبوع الماضي
            </p>
          </CardContent>
        </Card>

        {/* Total Products */}
        <Card className="stat-card">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي المنتجات</CardTitle>
              <Package className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">856</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-emerald-500 font-medium">↑ 8%</span> مقارنة بالشهر الماضي
            </p>
          </CardContent>
        </Card>

        {/* Total Customers */}
        <Card className="stat-card">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي العملاء</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,208</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-emerald-500 font-medium">↑ 18%</span> مقارنة بالشهر الماضي
            </p>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card className="stat-card bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-sm font-medium text-amber-700 dark:text-amber-400">تنبيه المخزون</CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-700 dark:text-amber-400">12</div>
            <p className="text-xs text-amber-600 dark:text-amber-500 mt-1">
              منتجات بحاجة إلى إعادة تعبئة
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="dashboard-card col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>الإيرادات الأسبوعية</CardTitle>
            <CardDescription>تحليل الإيرادات على مدار الأسبوع الحالي</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#94a3b8" 
                    fontSize={12} 
                    tickLine={false}
                    axisLine={{ stroke: '#E2E8F0' }}
                  />
                  <YAxis 
                    stroke="#94a3b8" 
                    fontSize={12} 
                    tickLine={false}
                    axisLine={{ stroke: '#E2E8F0' }}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderRadius: '0.5rem',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                    formatter={(value) => [`$${value}`, 'الإيراد']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#4ECDC4" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorAmount)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Selling Products */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>المنتجات الأكثر مبيعًا</CardTitle>
            <CardDescription>أعلى 5 منتجات من حيث المبيعات</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={topSellingProducts}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" horizontal={true} vertical={false} />
                  <XAxis type="number" stroke="#94a3b8" fontSize={12} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    scale="band" 
                    stroke="#94a3b8" 
                    fontSize={12}
                    width={100}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      borderRadius: '0.5rem',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                    formatter={(value, name, props) => {
                      return [`${value} وحدة`, 'المبيعات'];
                    }}
                  />
                  <Bar dataKey="sales" fill="#FF6B6B" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Sales by Category */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>المبيعات حسب الفئة</CardTitle>
            <CardDescription>توزيع المبيعات على الفئات المختلفة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      borderRadius: '0.5rem',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                    formatter={(value) => [`${value}%`, 'النسبة']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
