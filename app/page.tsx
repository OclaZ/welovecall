import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import Growth from "@/components/Growth";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Method from "@/components/Methodes";
import Partners from "@/components/Parterns";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Method />
        <Growth />
        <WhyChooseUs />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
