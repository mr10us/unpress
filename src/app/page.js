import { BeforeAfterSection } from "@/components/Sections/BeforeAfterSection/BeforeAfterSection";
import { FloppySection } from "@/components/Sections/FloppySection/FloppySection";
import { HeroSection } from "@/components/Sections/HeroSection/HeroSection";
import { ImageSection } from "@/components/Sections/ImageSection/ImageSection";
import { ImpactSection } from "@/components/Sections/ImpactSection/ImpactSection";
import { IntegrationRoadmapSection } from "@/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection";
import { IntegrationsSection } from "@/components/Sections/IntegrationsSection/IntegrationsSection";
import { ProblemsSection } from "@/components/Sections/ProblemsSection/ProblemsSection";
import { StepsSection } from "@/components/Sections/StepsSection/StepsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <FloppySection />
      <StepsSection />
      <ImageSection />
      <BeforeAfterSection />
      <ImpactSection />
      <IntegrationRoadmapSection />
      <IntegrationsSection />
    </>
  );
}
