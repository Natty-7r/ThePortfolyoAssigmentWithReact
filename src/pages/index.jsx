import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import HomeBanner from "../components/HomeBanner";
import Services from "../components/Services";
import Header from "../components/ui/Header";
import Nav from "../components/ui/Nav";
import { Fragment, useContext, useEffect } from "react";

import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
// const Portfolio = React.lazy(() => import("../components/Portfolio"));
import Portfolio from "../components/Portfolio";
import { UIContext } from "../contexts/UI";

const Index = () => {
  useEffect(() => {
    document.querySelector("html").classList.add("js");
    document.querySelector("body").classList.add("dark-body");
  }, []);

  const { toggle } = useContext(UIContext);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <Nav />
      <div className={`pages-stack ${toggle ? "pages-stack--open" : ""}`}>
        <HomeBanner />
        <AboutUs />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <Header />
    </Fragment>
  );
};
export default Index;
