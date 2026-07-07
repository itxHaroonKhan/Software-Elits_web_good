import Hero from "@/components/Hero";
import ScrollGallery from "@/components/ScrollGallery";
import ClientLogos from "@/components/ClientLogos";
import Stats from "@/components/Stats";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import ImageTrailEffect from "@/components/ImageTrail";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative">
      {/* Full-page mouse trail background */}
      <ImageTrailEffect
        imageSources={[
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&h=240&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=200&h=240&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=200&h=240&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=200&h=240&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=200&h=240&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=200&h=240&fit=crop&auto=format",
        ]}
        containerClassName="fixed inset-0 w-full h-full rounded-none bg-transparent -z-10"
        imageClassName="w-32 h-40"
        triggerDistance={15}
        maxTrailImages={8}
        useFadeEffect={true}
      />
      <Hero />
      <ScrollGallery />
      <ClientLogos />
      <Stats />
      <FeaturedWork />
      <Services />
      <Testimonials />
      <hr className="border-t border-zinc-800/80 w-full my-0" />
      <Insights />
      <ContactForm />
    </main>
  );
}
