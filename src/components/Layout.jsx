import { Outlet } from "react-router-dom";
import loader from "./Loader";
import Header from "./Header";
import HeroBlock from "./HeroBlock";
import Service from "./Service";
import About from "./About";
import Successful from "./Successful";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="wrapper-outlet">
        <HeroBlock />
      </div>
      <div className="wrapper-outlet">
        <Service />
      </div>
      <div className="wrapper-outlet">
        <About />
      </div>
      <div className="wrapper-outlet">
        <Successful />
      </div>
      <div className="wrapper-outlet">
        <Testimonials />
      </div>
      <div className="layout-wrapper__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
