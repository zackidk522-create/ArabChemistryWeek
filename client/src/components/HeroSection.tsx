import heroImage from '@assets/generated_images/Hero_chemistry_background_image_cbc75828.png';

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
        <p 
          className="text-lg md:text-xl text-white/90 font-light"
          data-testid="text-student-name"
        >
          إعداد الطالب: محمد السد أحمد – شعبة 102
        </p>
      </div>
    </section>
  );
}
