import heroImage from '@assets/stock_images/chemistry_laboratory_9eb8c8bf.jpg';
import logo1 from '@assets/images_1762267128270.jpg';
import logo2 from '@assets/ikPpVjO3_400x400_1762267132734.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center animate-in fade-in duration-1000"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 py-16 max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-in slide-in-from-bottom-8 duration-700"
          data-testid="text-main-title"
        >
          الأسبوع العربي للكيمياء
        </h1>
        
        <div className="flex flex-col items-center gap-6 mt-8 animate-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <img 
              src={logo1} 
              alt="شعار الجمعية الكيميائية السعودية" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain bg-white/90 rounded-lg p-2 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-xl animate-in zoom-in duration-500 delay-500"
            />
            <p 
              className="text-lg md:text-xl text-white/90 font-light animate-in fade-in duration-700 delay-700"
              data-testid="text-student-name"
            >
              إعداد الطالب: محمد السيد – شعبة 102
            </p>
            <img 
              src={logo2} 
              alt="شعار أسبوع الكيمياء العربي" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain bg-white/90 rounded-lg p-2 transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-xl animate-in zoom-in duration-500 delay-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
