import Features from "~/components/features";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import HowItWorks from "~/components/how-it-works";
import Pricing from "~/components/pricing";
import Testimonials from "~/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
