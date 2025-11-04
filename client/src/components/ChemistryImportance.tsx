import { Card } from '@/components/ui/card';
import { Beaker, Heart, Sprout, Factory } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ChemistryImportance() {
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

  const cards = [
    {
      icon: Heart,
      title: 'الصحة والطب',
      description: 'تساهم الكيمياء في تطوير الأدوية واللقاحات والعلاجات الطبية المتقدمة التي تنقذ الأرواح وتحسن صحة الإنسان',
      testId: 'card-importance-1'
    },
    {
      icon: Sprout,
      title: 'الزراعة والغذاء',
      description: 'تطوير الأسمدة والمبيدات الآمنة، وحفظ الأغذية، وتحسين جودة المحاصيل لتوفير الأمن الغذائي للمجتمعات',
      testId: 'card-importance-2'
    },
    {
      icon: Beaker,
      title: 'البيئة والطاقة',
      description: 'معالجة التلوث، تطوير مصادر الطاقة المتجددة، وإيجاد حلول مستدامة للحفاظ على كوكبنا للأجيال القادمة',
      testId: 'card-importance-3'
    },
    {
      icon: Factory,
      title: 'الصناعة والتكنولوجيا',
      description: 'تصنيع المواد الجديدة، البلاستيك، الإلكترونيات، وتطوير التقنيات الحديثة التي تشكل عالمنا المعاصر',
      testId: 'card-importance-4'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-6 bg-background" data-testid="section-chemistry-importance">
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-foreground transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-testid="text-section-title"
        >
          أهمية الكيمياء في حياتنا اليومية
        </h2>
        <p 
          className={`text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          الكيمياء هي العلم المركزي الذي يربط بين جميع العلوم الطبيعية، وتلعب دوراً حيوياً في تحسين نوعية حياتنا
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cards.map((card, index) => (
            <Card 
              key={index}
              className={`p-8 hover-elevate transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              data-testid={card.testId}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <card.icon className="w-8 h-8 text-primary transition-transform duration-300 hover:rotate-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{card.title}</h3>
                  <p className="text-card-foreground/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
