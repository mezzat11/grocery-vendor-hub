
import React from 'react';
import { 
  Bar, 
  BarChart, 
  Line, 
  LineChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart, 
  Pie,
  Cell
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Download, Printer } from 'lucide-react';

// Sample data for reports
const monthlyRevenueData = [
  { name: 'يناير', revenue: 12400 },
  { name: 'فبراير', revenue: 14800 },
  { name: 'مارس', revenue: 16200 },
  { name: 'أبريل', revenue: 18900 },
  { name: 'مايو', revenue: 21500 },
  { name: 'يونيو', revenue: 25300 },
  { name: 'يوليو', revenue: 28700 },
  { name: 'أغسطس', revenue: 27200 },
  { name: 'سبتمبر', revenue: 24800 },
  { name: 'أكتوبر', revenue: 29400 },
  { name: 'نوفمبر', revenue: 32500 },
  { name: 'ديسمبر', revenue: 38600 }
];

const categoryData = [
  { name: 'خضروات', value: 35, fill: '#4ECDC4' },
  { name: 'فواكه', value: 25, fill: '#FF6B6B' },
  { name: 'لحوم', value: 20, fill: '#292F36' },
  { name: 'منتجات الألبان', value: 15, fill: '#F7F7F2' },
  { name: 'معلبات', value: 5, fill: '#A3A38B' }
];

const orderStatusData = [
  { name: 'جديد', count: 45 },
  { name: 'قيد المعالجة', count: 32 },
  { name: 'قيد التوصيل', count: 28 },
  { name: 'تم التسليم', count: 124 },
  { name: 'ملغي', count: 15 },
  { name: 'مرتجع', count: 8 }
];

const ReportsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">التقارير والتحليلات</h1>
          <p className="text-muted-foreground">تحليل البيانات وعرض تقارير المبيعات</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <Printer className="h-4 w-4" />
            <span>طباعة</span>
          </Button>
          <Button className="gap-1">
            <Download className="h-4 w-4" />
            <span>تصدير البيانات</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-end gap-4 mb-4">
        <Select defaultValue="year">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="اختر الفترة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">أسبوعي</SelectItem>
            <SelectItem value="month">شهري</SelectItem>
            <SelectItem value="quarter">ربع سنوي</SelectItem>
            <SelectItem value="year">سنوي</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="sales" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="sales">تقارير المبيعات</TabsTrigger>
          <TabsTrigger value="products">تقارير المنتجات</TabsTrigger>
          <TabsTrigger value="customers">تقارير العملاء</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sales" className="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="dashboard-card col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>الإيرادات الشهرية</CardTitle>
                <CardDescription>إجمالي الإيرادات لكل شهر خلال السنة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={monthlyRevenueData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
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
                        tickFormatter={(value) => `${value} ريال`}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value} ريال`, 'الإيرادات']}
                        contentStyle={{
                          backgroundColor: 'white',
                          borderRadius: '0.5rem',
                          border: '1px solid #E2E8F0',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        }}
                      />
                      <Legend />
                      <Bar dataKey="revenue" name="الإيرادات" fill="#4ECDC4" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>حالة الطلبات</CardTitle>
                <CardDescription>عدد الطلبات حسب الحالة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={orderStatusData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
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
                        formatter={(value) => [`${value} طلب`, 'العدد']}
                        contentStyle={{
                          backgroundColor: 'white',
                          borderRadius: '0.5rem',
                          border: '1px solid #E2E8F0',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        }}
                      />
                      <Bar dataKey="count" name="عدد الطلبات" fill="#FF6B6B" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

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
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}%`, 'النسبة']}
                        contentStyle={{
                          backgroundColor: 'white',
                          borderRadius: '0.5rem',
                          border: '1px solid #E2E8F0',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="products" className="animate-fade-in">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>المنتجات الأكثر مبيعًا</CardTitle>
              <CardDescription>تحليل المنتجات الأكثر طلبًا</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12">
                <p className="text-muted-foreground">قم باختيار فترة زمنية لعرض التقرير</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="customers" className="animate-fade-in">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>تحليل العملاء</CardTitle>
              <CardDescription>تحليل سلوك العملاء والمشتريات</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12">
                <p className="text-muted-foreground">قم باختيار فترة زمنية لعرض التقرير</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportsPage;
