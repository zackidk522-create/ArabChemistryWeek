export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fa-facebook-f', url: '#', label: 'فيسبوك' },
    { icon: 'fa-twitter', url: '#', label: 'تويتر' },
    { icon: 'fa-instagram', url: '#', label: 'إنستغرام' },
    { icon: 'fa-linkedin-in', url: '#', label: 'لينكد إن' },
    { icon: 'fa-youtube', url: '#', label: 'يوتيوب' }
  ];

  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">الأسبوع العربي للكيمياء</h3>
            <p className="text-primary-foreground/90">معاً نحو مستقبل علمي مشرق</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4" data-testid="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-foreground/10 hover-elevate active-elevate-2 transition-all duration-300"
                aria-label={social.label}
                data-testid={`link-social-${index + 1}`}
              >
                <i className={`fab ${social.icon} text-primary-foreground`}></i>
              </a>
            ))}
          </div>

          <div className="text-center text-sm text-primary-foreground/80 border-t border-primary-foreground/20 pt-6 w-full">
            <p data-testid="text-copyright">
              جميع الحقوق محفوظة © {currentYear} الأسبوع العربي للكيمياء
            </p>
            <p className="mt-2">
              إعداد الطالب: محمد السد أحمد – شعبة 102
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
