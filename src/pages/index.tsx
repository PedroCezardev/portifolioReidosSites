import Footer from "@/components/Footer/Footer";
import Guarantee from "@/components/Guarantee/Guarantee";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Modules from "@/components/Modules/Modules";
import Moving from "@/components/MovingBars/Moving";
import Price from "@/components/Price/Price";
import Questions from "@/components/Questions/Questions";
import SectionTwo from "@/components/SectionTwo/SectionTwo";
import ZoomEffect from "@/components/ZommEffect/ZoomEffect";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionTwo />
      <Moving />
      <Guarantee />
      <ZoomEffect />
      <Modules />
      <Price />
      <Questions />
      <Footer />
    </>
  );
}
