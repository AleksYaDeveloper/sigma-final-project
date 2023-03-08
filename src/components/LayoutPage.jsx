import Header from "./Header";
import HeroBlock from "./HeroBlock";
import Service from "./Service";
import About from "./About";
import Successful from "./Successful";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function LayoutPage() {
  // скролл вверх при переключении страницы
  window.scrollTo({
    top: 0,
    left: 0,
  });

  return (
    <>
      <Header />
      <HeroBlock />
      <Service />
      <About />
      <Successful />
      <Testimonials />
      <Footer />
    </>
  );
}

export default LayoutPage;
