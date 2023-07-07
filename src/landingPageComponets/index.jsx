import Header from "./header";
import Hero from "./hero";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Footer from "./footer";

const LandingPageComponents = () => {
  return (
    <div className="stack gapX">
      <Header />
      <div className="mainContentColo stack gapX">
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPageComponents;
