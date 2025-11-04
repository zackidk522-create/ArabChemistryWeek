import logo1 from '@assets/generated_images/Chemistry_association_logo_one_df244e14.png';
import logo2 from '@assets/generated_images/Chemistry_association_logo_two_d4635447.png';

export default function AssociationLogos() {
  return (
    <section className="py-16 md:py-20 px-6 bg-card" data-testid="section-associations">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-card-foreground">
          بالتعاون مع
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          الجمعيات والمؤسسات العلمية الداعمة
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12">
          <div 
            className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover-elevate transition-all duration-300"
            data-testid="logo-association-1"
          >
            <img 
              src={logo1} 
              alt="شعار الجمعية الكيميائية العربية" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>
          <div 
            className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover-elevate transition-all duration-300"
            data-testid="logo-association-2"
          >
            <img 
              src={logo2} 
              alt="شعار اتحاد الكيميائيين العرب" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
