import About from "./about/page";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./pages/hero";
import Students from "./pages/students";
import Why from "./pages/why";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Students />
      <Footer />
    </>
  );
}
