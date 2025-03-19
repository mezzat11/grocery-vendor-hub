
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Settings,
  CreditCard,
  Globe,
  Users,
  Shield,
  Check,
  Save,
  Moon,
  Sun,
  Truck,
  User,
  Bell,
  Languages
} from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">الإعدادات والتكوينات</h1>
          <p className="text-muted-foreground">إدارة إعدادات التطبيق والمتجر</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-6">
          <TabsTrigger value="general">عام</TabsTrigger>
          <TabsTrigger value="payment">طرق الدفع</TabsTrigger>
          <TabsTrigger value="shipping">التوصيل والشحن</TabsTrigger>
          <TabsTrigger value="users">المستخدمين والأدوار</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>الإعدادات العامة</CardTitle>
              <CardDescription>تخصيص الإعدادات العامة للتطبيق</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">معلومات المتجر</h3>
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="store_name">اسم المتجر</Label>
                    <Input id="store_name" value="بقالة بلس+" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="store_email">البريد الإلكتروني</Label>
                    <Input id="store_email" value="info@groceryplus.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="store_phone">رقم الهاتف</Label>
                    <Input id="store_phone" value="+966 12 345 6789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="store_currency">العملة</Label>
                    <Input id="store_currency" value="ريال سعودي (SAR)" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">إعدادات اللغة والمظهر</h3>
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">اللغة الافتراضية</Label>
                      <p className="text-sm text-muted-foreground">اختر اللغة الافتراضية للواجهة</p>
                    </div>
                    <div className="flex items-center">
                      <Languages className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>العربية</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">الوضع الليلي</Label>
                      <p className="text-sm text-muted-foreground">تفعيل المظهر الداكن للواجهة</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="theme-mode" />
                      <Label htmlFor="theme-mode" className="sr-only">الوضع الليلي</Label>
                      <Sun className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">اتجاه الواجهة</Label>
                      <p className="text-sm text-muted-foreground">تحديد اتجاه عرض الواجهة</p>
                    </div>
                    <Badge>من اليمين إلى اليسار</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">تعدد اللغات</Label>
                      <p className="text-sm text-muted-foreground">دعم لغات متعددة في الواجهة</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="multi-language" />
                      <Label htmlFor="multi-language" className="sr-only">تعدد اللغات</Label>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button className="gap-1">
                <Save className="h-4 w-4" />
                <span>حفظ الإعدادات</span>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>طرق الدفع</CardTitle>
              <CardDescription>إدارة وتكوين طرق الدفع المتاحة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-medium">بطاقات الائتمان</h4>
                      <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                    </div>
                  </div>
                  <Switch id="card-payment" defaultChecked />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-medium">مدى (بطاقات الصراف)</h4>
                      <p className="text-sm text-muted-foreground">بطاقات مدى المحلية</p>
                    </div>
                  </div>
                  <Switch id="mada-payment" defaultChecked />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-medium">Apple Pay</h4>
                      <p className="text-sm text-muted-foreground">الدفع باستخدام Apple Pay</p>
                    </div>
                  </div>
                  <Switch id="apple-pay" defaultChecked />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-medium">الدفع عند الاستلام</h4>
                      <p className="text-sm text-muted-foreground">الدفع نقدًا عند الاستلام</p>
                    </div>
                  </div>
                  <Switch id="cash-on-delivery" defaultChecked />
                </div>
              </div>
              
              <Button className="gap-1">
                <Save className="h-4 w-4" />
                <span>حفظ الإعدادات</span>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="shipping" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>التوصيل والشحن</CardTitle>
              <CardDescription>إعدادات التوصيل ومناطق الشحن</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">مناطق التوصيل</h3>
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">الرياض</h4>
                      <p className="text-sm text-muted-foreground">جميع أحياء مدينة الرياض</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">15 ريال</p>
                      <p className="text-sm text-muted-foreground">توصيل خلال 60 دقيقة</p>
                    </div>
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">جدة</h4>
                      <p className="text-sm text-muted-foreground">جميع أحياء مدينة جدة</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">18 ريال</p>
                      <p className="text-sm text-muted-foreground">توصيل خلال 60 دقيقة</p>
                    </div>
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">الدمام</h4>
                      <p className="text-sm text-muted-foreground">جميع أحياء مدينة الدمام</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">20 ريال</p>
                      <p className="text-sm text-muted-foreground">توصيل خلال 90 دقيقة</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <h3 className="text-lg font-medium">إعدادات التوصيل</h3>
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">التوصيل المجاني</Label>
                      <p className="text-sm text-muted-foreground">للطلبات أكثر من 200 ريال</p>
                    </div>
                    <Switch id="free-shipping" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">توصيل في نفس اليوم</Label>
                      <p className="text-sm text-muted-foreground">توصيل سريع خلال 60 دقيقة</p>
                    </div>
                    <Switch id="same-day-delivery" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">توصيل مجدول</Label>
                      <p className="text-sm text-muted-foreground">اختيار وقت وتاريخ التوصيل</p>
                    </div>
                    <Switch id="scheduled-delivery" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">تتبع التوصيل المباشر</Label>
                      <p className="text-sm text-muted-foreground">تتبع مندوب التوصيل على الخريطة</p>
                    </div>
                    <Switch id="live-tracking" defaultChecked />
                  </div>
                </div>
              </div>
              
              <Button className="gap-1 mt-6">
                <Save className="h-4 w-4" />
                <span>حفظ الإعدادات</span>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="users" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>المستخدمين والأدوار</CardTitle>
              <CardDescription>إدارة المستخدمين وصلاحياتهم</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">أنواع المستخدمين</h3>
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-medium">مدير النظام</h4>
                        <p className="text-sm text-muted-foreground">وصول كامل لجميع الميزات والإعدادات</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5 mr-1" />
                      <span>نشط</span>
                    </Badge>
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <User className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-medium">مدير المنتجات</h4>
                        <p className="text-sm text-muted-foreground">إدارة المنتجات والمخزون فقط</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5 mr-1" />
                      <span>نشط</span>
                    </Badge>
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Truck className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-medium">مدير التوصيل</h4>
                        <p className="text-sm text-muted-foreground">إدارة الطلبات والتوصيل فقط</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5 mr-1" />
                      <span>نشط</span>
                    </Badge>
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-medium">مدير العملاء</h4>
                        <p className="text-sm text-muted-foreground">إدارة العملاء والمبيعات فقط</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5 mr-1" />
                      <span>نشط</span>
                    </Badge>
                  </div>
                </div>
                
                <Button variant="outline" className="gap-1 mt-4">
                  <User className="h-4 w-4" />
                  <span>إضافة دور جديد</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات الإشعارات</CardTitle>
              <CardDescription>تخصيص إعدادات الإشعارات والتنبيهات</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">إشعارات النظام</h3>
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">طلبات جديدة</h4>
                        <p className="text-sm text-muted-foreground">إشعار عند وصول طلب جديد</p>
                      </div>
                    </div>
                    <Switch id="new-order-notification" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">انخفاض المخزون</h4>
                        <p className="text-sm text-muted-foreground">تنبيه عند انخفاض مخزون منتج ما</p>
                      </div>
                    </div>
                    <Switch id="low-stock-notification" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">مراجعات العملاء</h4>
                        <p className="text-sm text-muted-foreground">إشعار عند إضافة تقييم جديد</p>
                      </div>
                    </div>
                    <Switch id="review-notification" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">تسجيل عميل جديد</h4>
                        <p className="text-sm text-muted-foreground">إشعار عند انضمام عميل جديد</p>
                      </div>
                    </div>
                    <Switch id="new-customer-notification" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">طلبات الإرجاع</h4>
                        <p className="text-sm text-muted-foreground">إشعار عند وجود طلب إرجاع منتج</p>
                      </div>
                    </div>
                    <Switch id="return-notification" defaultChecked />
                  </div>
                </div>
              </div>
              
              <Button className="gap-1">
                <Save className="h-4 w-4" />
                <span>حفظ الإعدادات</span>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
