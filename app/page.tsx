import {
  CaseStudySection,
  CTASection,
  CustomersSection,
  FeaturesDashboardSection,
  FeaturesMapSection,
  FeaturesSection,
  FinalCTASection,
  Footer,
  Header,
  HeroSection,
  PlatformsSection,
  TestimonialsSection,
  TopBanner,
} from "@/modules/landing/components";

export default function LandingPage() {
  return (
    <main>
      <TopBanner />
      <Header />
      <HeroSection />
      <PlatformsSection />
      <CustomersSection />
      <FeaturesSection />
      <CTASection />
      <FeaturesDashboardSection />
      <FeaturesMapSection />
      <CaseStudySection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
