import Header from "../components/Header";
import Hero from "../components/Hero";
import ClubSection from "../components/ClubSection";
import TeamsSection from "../components/TeamsSection";
import TrainingSection from "../components/TrainingSection";
import GallerySection from "@/components/GallerySection";
import NewsSection from "../components/NewsSection";
import CtaSection from "../components/CtaSection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ClubSection />
      <TeamsSection />
      <TrainingSection />
      <GallerySection />
      <NewsSection />
      <CtaSection />
      <PartnersSection />
      <Footer />
    </>
  );
}