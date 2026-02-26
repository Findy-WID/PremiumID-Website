import PageLayout from '../../components/layout/PageLayout';
import HeroSection from './components/HeroSection';
import OnePlatform from './components/OnePlatform';
import AgentIdentitySection from './components/InnovationSection';
import AccoladesSection from './components/AcoladesSection';
// import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import { homeData } from './data';

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <OnePlatform />
      <AgentIdentitySection />
      <AccoladesSection />
      <CTASection {...homeData.cta} />
      {/* <StatsSection stats={homeData.stats} /> */}
    </PageLayout>
  );
}