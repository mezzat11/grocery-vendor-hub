
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
  Package, 
  Search, 
  Plus, 
  Filter, 
  Download, 
  Upload, 
  Edit, 
  Trash,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

// Sample product data
const products = [
  { 
    id: 1, 
    name: 'طماطم طازجة', 
    category: 'خضروات', 
    price: 5.99, 
    stock: 120, 
    status: 'متوفر' 
  },
  { 
    id: 2, 
    name: 'تفاح أحمر', 
    category: 'فواكه', 
    price: 7.50, 
    stock: 80, 
    status: 'متوفر' 
  },
  { 
    id: 3, 
    name: 'حليب كامل الدسم', 
    category: 'ألبان', 
    price: 4.25, 
    stock: 65, 
    status: 'متوفر' 
  },
  { 
    id: 4, 
    name: 'لحم بقري مفروم', 
    category: 'لحوم', 
    price: 18.99, 
    stock: 45, 
    status: 'متوفر' 
  },
  { 
    id: 5, 
    name: 'خبز عربي', 
    category: 'مخبوزات', 
    price: 1.99, 
    stock: 10, 
    status: 'منخفض' 
  },
  { 
    id: 6, 
    name: 'زيت زيتون بكر', 
    category: 'زيوت', 
    price: 12.50, 
    stock: 0, 
    status: 'نفذ' 
  },
  { 
    id: 7, 
    name: 'أرز بسمتي', 
    category: 'حبوب', 
    price: 9.99, 
    stock: 150, 
    status: 'متوفر' 
  },
  { 
    id: 8, 
    name: 'عصير برتقال طازج', 
    category: 'مشروبات', 
    price: 3.99, 
    stock: 25, 
    status: 'متوفر' 
  },
];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = products.filter(
    product => product.name.includes(searchTerm) || 
    product.category.includes(searchTerm)
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'متوفر':
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{status}</Badge>;
      case 'منخفض':
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">{status}</Badge>;
      case 'نفذ':
        return <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">إدارة المنتجات</h1>
          <p className="text-muted-foreground">إضافة وتعديل وإدارة منتجات متجرك</p>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          <span>إضافة منتج</span>
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="relative w-full md:w-72">
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="بحث عن منتجات..."
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
                <Upload className="h-4 w-4" />
                <span>استيراد</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">الاسم</TableHead>
                  <TableHead className="text-right">الفئة</TableHead>
                  <TableHead className="text-right">السعر</TableHead>
                  <TableHead className="text-right">المخزون</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <TableRow key={product.id} className="hover:bg-muted/30">
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.price.toFixed(2)} ريال</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>{getStatusBadge(product.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      لا توجد منتجات مطابقة لبحثك
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

export default ProductsPage;
