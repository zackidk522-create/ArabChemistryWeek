import HeroSection from '@/components/HeroSection';
import ChemistryImportance from '@/components/ChemistryImportance';
import WeekGoals from '@/components/WeekGoals';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ChemistryImportance />
      <WeekGoals />
      <Footer />
    </div>
  );
}
