import HeroSection from '@/components/HeroSection';
import ChemistryImportance from '@/components/ChemistryImportance';
import WeekGoals from '@/components/WeekGoals';
import ActivitiesEvents from '@/components/ActivitiesEvents';
import AssociationLogos from '@/components/AssociationLogos';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ChemistryImportance />
      <WeekGoals />
      <ActivitiesEvents />
      <AssociationLogos />
      <Footer />
    </div>
  );
}
