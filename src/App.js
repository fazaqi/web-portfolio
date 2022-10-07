import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Socials from "./components/Socials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Works from "./pages/Works";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
      <Socials />
    </>
  );
}

export default App;
