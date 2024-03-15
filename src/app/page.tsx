import FeaturesCourses from "@/components/FeaturesCourses";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturesCourses/>

    </main>
  );
}
