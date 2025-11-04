import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function ActivitiesEvents() {
  const events = [
    {
      title: 'محاضرة افتتاحية: الكيمياء الخضراء',
      date: 'الأحد 10 مارس 2024',
      time: '10:00 صباحاً',
      location: 'القاعة الرئيسية',
      description: 'محاضرة تفتتح فعاليات الأسبوع وتستعرض أحدث التطورات في الكيمياء الصديقة للبيئة',
      category: 'محاضرة'
    },
    {
      title: 'ورشة عمل: التجارب الكيميائية الآمنة',
      date: 'الإثنين 11 مارس 2024',
      time: '2:00 مساءً',
      location: 'مختبر الكيمياء - المبنى A',
      description: 'ورشة عملية تفاعلية لتعليم الطلاب كيفية إجراء التجارب الكيميائية بأمان',
      category: 'ورشة عمل'
    },
    {
      title: 'معرض الابتكارات الكيميائية',
      date: 'الثلاثاء 12 مارس 2024',
      time: '9:00 صباحاً - 5:00 مساءً',
      location: 'قاعة المعارض',
      description: 'عرض لأحدث الاختراعات والمشاريع البحثية للطلاب والباحثين في مجال الكيمياء',
      category: 'معرض'
    },
    {
      title: 'ندوة علمية: الكيمياء في الطب الحديث',
      date: 'الأربعاء 13 مارس 2024',
      time: '11:00 صباحاً',
      location: 'قاعة المؤتمرات',
      description: 'ندوة تناقش دور الكيمياء في تطوير الأدوية واللقاحات والعلاجات الطبية',
      category: 'ندوة'
    },
    {
      title: 'مسابقة الكيمياء للطلاب',
      date: 'الخميس 14 مارس 2024',
      time: '1:00 مساءً',
      location: 'القاعة الرئيسية',
      description: 'مسابقة علمية شيقة تختبر معرفة الطلاب في مختلف فروع الكيمياء مع جوائز قيمة',
      category: 'مسابقة'
    },
    {
      title: 'حفل الختام وتوزيع الجوائز',
      date: 'الجمعة 15 مارس 2024',
      time: '4:00 مساءً',
      location: 'القاعة الكبرى',
      description: 'حفل ختامي يتضمن تكريم المتميزين وتوزيع الجوائز على الفائزين في المسابقات',
      category: 'حفل'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-background" data-testid="section-activities">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground" data-testid="text-activities-title">
          الأنشطة والفعاليات
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          برنامج غني ومتنوع من الفعاليات العلمية والتفاعلية على مدار الأسبوع
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card 
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-event-${index + 1}`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-card-foreground flex-1">
                    {event.title}
                  </h3>
                  <Badge variant="secondary" data-testid={`badge-category-${index + 1}`}>
                    {event.category}
                  </Badge>
                </div>
                
                <p className="text-card-foreground/80 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex flex-col gap-2 pt-2 border-t border-card-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
