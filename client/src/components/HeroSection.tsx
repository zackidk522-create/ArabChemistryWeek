import heroImage from '@assets/stock_images/chemistry_laboratory_9eb8c8bf.jpg';
import logo1 from '@assets/images_1762267128270.jpg';
import logo2 from '@assets/ikPpVjO3_400x400_1762267132734.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 py-16 max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          data-testid="text-main-title"
        >
          الأسبوع العربي للكيمياء
        </h1>
        
        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex items-center justify-center gap-6">
            <img 
              src={logo1} 
              alt="شعار الجمعية الكيميائية السعودية" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain bg-white/90 rounded-lg p-2"
            />
            <p 
              className="text-lg md:text-xl text-white/90 font-light"
              data-testid="text-student-name"
            >
              إعداد الطالب: محمد السيد – شعبة 102
            </p>
            <img 
              src={logo2} 
              alt="شعار أسبوع الكيمياء العربي" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain bg-white/90 rounded-lg p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
