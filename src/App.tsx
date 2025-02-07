import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./library/index";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/Experience";
import Gallery from "./pages/gallery/Gallery";
import Project from "./pages/project/Project";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Service from "./pages/service/Service";
import Blogs from "./pages/blogs/Blogs";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
