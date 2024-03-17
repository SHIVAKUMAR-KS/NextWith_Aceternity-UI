import FeaturesCourses from "@/components/FeaturesCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturesCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinar/>
      <Instructors/>
      <Footer />

    </main>
  );
}
