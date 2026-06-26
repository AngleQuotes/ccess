import ConsultationSection from "@/components/home/ConsultationSection";
import FactsSection from "@/components/home/FactsSection";
import ForumSection from "@/components/home/ForumSection";
import HeroSection from "@/components/home/HeroSection";
import JoinUsSection from "@/components/home/JoinUsSection";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import LatestSection from "@/components/home/LatestSection";
import NewsSection from "@/components/home/NewsSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatementSection from "@/components/home/StatementSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FactsSection />
      <StatementSection />
      <NewsSection />
      <LatestSection />
      <LatestNewsSection />
      <ServicesSection />
      <ForumSection />
      <JoinUsSection />
      <ConsultationSection />
    </div>
  );
}
