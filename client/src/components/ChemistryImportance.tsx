import { Card } from '@/components/ui/card';
import { Beaker, Heart, Sprout, Factory } from 'lucide-react';

export default function ChemistryImportance() {
  return (
    <section className="py-16 md:py-24 px-6 bg-background" data-testid="section-chemistry-importance">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground" data-testid="text-section-title">
          أهمية الكيمياء في حياتنا اليومية
        </h2>
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          الكيمياء هي العلم المركزي الذي يربط بين جميع العلوم الطبيعية، وتلعب دوراً حيوياً في تحسين نوعية حياتنا
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-importance-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">الصحة والطب</h3>
                <p className="text-card-foreground/80 leading-relaxed">
                  تساهم الكيمياء في تطوير الأدوية واللقاحات والعلاجات الطبية المتقدمة التي تنقذ الأرواح وتحسن صحة الإنسان
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-importance-2">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Sprout className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">الزراعة والغذاء</h3>
                <p className="text-card-foreground/80 leading-relaxed">
                  تطوير الأسمدة والمبيدات الآمنة، وحفظ الأغذية، وتحسين جودة المحاصيل لتوفير الأمن الغذائي للمجتمعات
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-importance-3">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Beaker className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">البيئة والطاقة</h3>
                <p className="text-card-foreground/80 leading-relaxed">
                  معالجة التلوث، تطوير مصادر الطاقة المتجددة، وإيجاد حلول مستدامة للحفاظ على كوكبنا للأجيال القادمة
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-importance-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">الصناعة والتكنولوجيا</h3>
                <p className="text-card-foreground/80 leading-relaxed">
                  تصنيع المواد الجديدة، البلاستيك، الإلكترونيات، وتطوير التقنيات الحديثة التي تشكل عالمنا المعاصر
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
