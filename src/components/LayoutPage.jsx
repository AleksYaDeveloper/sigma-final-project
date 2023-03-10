import Header from "./Header";
import HeroBlock from "./HeroBlock";
import Service from "./Service";
import About from "./About";
import Successful from "./Successful";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Loader from "./Loader";

function LayoutPage() {
  // скролл вверх при переключении страницы
  window.scrollTo({
    top: 0,
    left: 0,
  });

  return (
    <>
      <Loader />
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
