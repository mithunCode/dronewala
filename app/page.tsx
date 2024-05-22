import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className=" flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <Hero />

      <About />
      <Gallery />
      <Testimonial />
      <Footer />
    </main>
  );
}
