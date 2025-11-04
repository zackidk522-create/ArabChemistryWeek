import { Card } from '@/components/ui/card';
import { Target, Users, GraduationCap, Lightbulb, Globe, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function WeekGoals() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goals = [
    {
      icon: Target,
      title: 'التوعية العلمية',
      description: 'نشر الوعي بأهمية الكيمياء ودورها في التنمية المستدامة والتقدم العلمي'
    },
    {
      icon: Users,
      title: 'التواصل المجتمعي',
      description: 'بناء جسور التواصل بين الباحثين والطلاب والمجتمع العربي'
    },
    {
      icon: GraduationCap,
      title: 'تشجيع البحث العلمي',
      description: 'تحفيز الطلاب والباحثين على الابتكار والبحث في مجالات الكيمياء'
    },
    {
      icon: Lightbulb,
      title: 'الابتكار والإبداع',
      description: 'عرض أحدث الابتكارات والاكتشافات الكيميائية العربية والعالمية'
    },
    {
      icon: Globe,
      title: 'التعاون الدولي',
      description: 'تعزيز التعاون بين المؤسسات العلمية العربية والعالمية'
    },
    {
      icon: Award,
      title: 'تكريم المتميزين',
      description: 'تقدير جهود الباحثين والمبدعين في مجال الكيمياء'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-6 bg-card" data-testid="section-week-goals">
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-card-foreground transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-testid="text-goals-title"
        >
          أهداف الأسبوع العربي للكيمياء
        </h2>
        <p 
          className={`text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          يسعى الأسبوع العربي للكيمياء إلى تحقيق مجموعة من الأهداف النبيلة التي تخدم المجتمع العلمي والأكاديمي
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <Card 
              key={index} 
              className={`p-6 hover-elevate transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              data-testid={`card-goal-${index + 1}`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12">
                  <goal.icon className="w-8 h-8 text-primary transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground transition-colors duration-300 group-hover:text-primary">
                  {goal.title}
                </h3>
                <p className="text-card-foreground/80 leading-relaxed">{goal.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
