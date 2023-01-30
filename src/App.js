// import logo from "./logo.svg";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import SocialLinks from "./inc/SocialLinks";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Layout>
        <Home />
        <SocialLinks />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
