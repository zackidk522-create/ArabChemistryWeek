export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">الأسبوع العربي للكيمياء</h3>
            <p className="text-primary-foreground/90">معاً نحو مستقبل علمي مشرق</p>
          </div>

          <div className="text-center text-sm text-primary-foreground/80 border-t border-primary-foreground/20 pt-6 w-full">
            <p data-testid="text-copyright">
              جميع الحقوق محفوظة © {currentYear} الأسبوع العربي للكيمياء
            </p>
            <p className="mt-2">
              إعداد الطالب: محمد السيد – شعبة 102
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
