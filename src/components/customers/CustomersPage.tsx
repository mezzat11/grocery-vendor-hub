
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
  Users, 
  Search, 
  Filter, 
  Download, 
  Mail,
  Phone,
  ShoppingBag,
  MoreHorizontal,
  UserPlus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

// Sample customer data
const customers = [
  { 
    id: 1,
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    phone: '+966 50 123 4567',
    orders: 12,
    spent: 1250.80,
    status: 'نشط',
    joinDate: '2023-03-15'
  },
  { 
    id: 2,
    name: 'فاطمة علي',
    email: 'fatima@example.com',
    phone: '+966 55 234 5678',
    orders: 8,
    spent: 895.50,
    status: 'نشط',
    joinDate: '2023-04-20'
  },
  { 
    id: 3,
    name: 'خالد عبدالله',
    email: 'khalid@example.com',
    phone: '+966 54 345 6789',
    orders: 4,
    spent: 425.30,
    status: 'نشط',
    joinDate: '2023-05-05'
  },
  { 
    id: 4,
    name: 'سارة عبدالرحمن',
    email: 'sara@example.com',
    phone: '+966 56 456 7890',
    orders: 2,
    spent: 180.20,
    status: 'غير نشط',
    joinDate: '2023-05-12'
  },
  { 
    id: 5,
    name: 'عمر حسن',
    email: 'omar@example.com',
    phone: '+966 59 567 8901',
    orders: 7,
    spent: 780.40,
    status: 'نشط',
    joinDate: '2023-04-08'
  },
  { 
    id: 6,
    name: 'منى أحمد',
    email: 'mona@example.com',
    phone: '+966 50 678 9012',
    orders: 0,
    spent: 0,
    status: 'غير نشط',
    joinDate: '2023-06-01'
  },
  { 
    id: 7,
    name: 'يوسف محمود',
    email: 'yousef@example.com',
    phone: '+966 55 789 0123',
    orders: 5,
    spent: 520.90,
    status: 'نشط',
    joinDate: '2023-02-18'
  },
  { 
    id: 8,
    name: 'ليلى سمير',
    email: 'layla@example.com',
    phone: '+966 54 890 1234',
    orders: 3,
    spent: 320.60,
    status: 'محظور',
    joinDate: '2023-03-25'
  }
];

const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCustomers = customers.filter(
    customer => customer.name.includes(searchTerm) || 
    customer.email.includes(searchTerm) ||
    customer.phone.includes(searchTerm)
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'نشط':
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{status}</Badge>;
      case 'غير نشط':
        return <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200">{status}</Badge>;
      case 'محظور':
        return <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    return nameParts.length > 1 
      ? `${nameParts[0][0]}${nameParts[1][0]}` 
      : nameParts[0].substring(0, 2);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">إدارة العملاء</h1>
          <p className="text-muted-foreground">عرض ومتابعة حسابات العملاء</p>
        </div>
        <Button className="gap-1">
          <UserPlus className="h-4 w-4" />
          <span>إضافة عميل</span>
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="relative w-full md:w-72">
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="بحث عن عملاء..."
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
              <Button variant="outline" size="sm" className="gap-1">
                <Mail className="h-4 w-4" />
                <span>إرسال نشرة</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">العميل</TableHead>
                  <TableHead className="text-right">جوال</TableHead>
                  <TableHead className="text-right">الطلبات</TableHead>
                  <TableHead className="text-right">الإنفاق</TableHead>
                  <TableHead className="text-right">تاريخ الانضمام</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((customer) => (
                    <TableRow key={customer.id} className="hover:bg-muted/30">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(customer.name)}&background=random`} alt={customer.name} />
                            <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{customer.name}</div>
                            <div className="text-xs text-muted-foreground">{customer.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3 text-muted-foreground" />
                          <span>{customer.phone}</span>
                        </div>
                      </TableCell>
                      <TableCell>{customer.orders}</TableCell>
                      <TableCell>{customer.spent.toFixed(2)} ريال</TableCell>
                      <TableCell>{new Date(customer.joinDate).toLocaleDateString('ar-SA')}</TableCell>
                      <TableCell>{getStatusBadge(customer.status)}</TableCell>
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
                              <ShoppingBag className="h-4 w-4" />
                              <span>عرض الطلبات</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-2 items-center">
                              <Mail className="h-4 w-4" />
                              <span>إرسال بريد</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-2 items-center">
                              <Phone className="h-4 w-4" />
                              <span>اتصال</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      لا يوجد عملاء مطابقين لبحثك
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomersPage;
