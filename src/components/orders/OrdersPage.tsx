
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  ShoppingBasket, 
  Search, 
  Filter, 
  Download, 
  Printer,
  Eye,
  Truck,
  MoreHorizontal
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample order data
const orders = [
  { 
    id: '#ORD-5293',
    customer: 'أحمد محمد',
    date: '2023-07-28',
    total: 156.99,
    status: 'جديد',
    items: 5
  },
  { 
    id: '#ORD-5294',
    customer: 'فاطمة علي',
    date: '2023-07-28',
    total: 89.50,
    status: 'قيد المعالجة',
    items: 3
  },
  { 
    id: '#ORD-5295',
    customer: 'خالد عبدالله',
    date: '2023-07-27',
    total: 247.80,
    status: 'قيد التوصيل',
    items: 8
  },
  { 
    id: '#ORD-5296',
    customer: 'سارة عبدالرحمن',
    date: '2023-07-27',
    total: 124.30,
    status: 'تم التسليم',
    items: 4
  },
  { 
    id: '#ORD-5297',
    customer: 'عمر حسن',
    date: '2023-07-26',
    total: 75.20,
    status: 'ملغي',
    items: 2
  },
  { 
    id: '#ORD-5298',
    customer: 'منى أحمد',
    date: '2023-07-26',
    total: 189.75,
    status: 'تم التسليم',
    items: 6
  },
  { 
    id: '#ORD-5299',
    customer: 'يوسف محمود',
    date: '2023-07-25',
    total: 132.60,
    status: 'تم التسليم',
    items: 4
  },
  { 
    id: '#ORD-5300',
    customer: 'ليلى سمير',
    date: '2023-07-25',
    total: 95.40,
    status: 'مرتجع',
    items: 3
  }
];

const OrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const getFilteredOrders = () => {
    let filtered = orders;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        order => order.id.includes(searchTerm) || 
        order.customer.includes(searchTerm)
      );
    }
    
    // Filter by status tab
    if (activeTab !== 'all') {
      const statusMap: Record<string, string> = {
        'new': 'جديد',
        'processing': 'قيد المعالجة',
        'delivering': 'قيد التوصيل',
        'delivered': 'تم التسليم',
        'cancelled': 'ملغي',
        'returned': 'مرتجع'
      };
      
      filtered = filtered.filter(order => order.status === statusMap[activeTab]);
    }
    
    return filtered;
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'جديد':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{status}</Badge>;
      case 'قيد المعالجة':
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">{status}</Badge>;
      case 'قيد التوصيل':
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">{status}</Badge>;
      case 'تم التسليم':
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{status}</Badge>;
      case 'ملغي':
        return <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200">{status}</Badge>;
      case 'مرتجع':
        return <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">إدارة الطلبات</h1>
          <p className="text-muted-foreground">تتبع ومعالجة طلبات العملاء</p>
        </div>
        <Button className="gap-1">
          <Printer className="h-4 w-4" />
          <span>طباعة التقرير</span>
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="relative w-full md:w-72">
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="بحث عن طلبات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-3 pr-9 input-rtl"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="h-4 w-4" />
                <span>تصفية</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                <span>تصدير</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-4">
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="new">جديد</TabsTrigger>
              <TabsTrigger value="processing">قيد المعالجة</TabsTrigger>
              <TabsTrigger value="delivering">قيد التوصيل</TabsTrigger>
              <TabsTrigger value="delivered">تم التسليم</TabsTrigger>
              <TabsTrigger value="cancelled">ملغي</TabsTrigger>
              <TabsTrigger value="returned">مرتجع</TabsTrigger>
            </TabsList>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">رقم الطلب</TableHead>
                    <TableHead className="text-right">العميل</TableHead>
                    <TableHead className="text-right">التاريخ</TableHead>
                    <TableHead className="text-right">المجموع</TableHead>
                    <TableHead className="text-right">العناصر</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getFilteredOrders().length > 0 ? (
                    getFilteredOrders().map((order) => (
                      <TableRow key={order.id} className="hover:bg-muted/30">
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{new Date(order.date).toLocaleDateString('ar-SA')}</TableCell>
                        <TableCell>{order.total.toFixed(2)} ريال</TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>إجراءات</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="flex gap-2 items-center">
                                <Eye className="h-4 w-4" />
                                <span>عرض التفاصيل</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex gap-2 items-center">
                                <Truck className="h-4 w-4" />
                                <span>تعيين للتوصيل</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex gap-2 items-center">
                                <Printer className="h-4 w-4" />
                                <span>طباعة الفاتورة</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        لا توجد طلبات مطابقة لبحثك
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersPage;
