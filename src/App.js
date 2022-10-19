import Contact from "./component/Contact Form/Contactform";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects";

import { useState } from "react";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Nav/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState("about");
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<About />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
