// import logo from "./logo.svg";

import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import SocialLinks from "./inc/SocialLinks";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
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
