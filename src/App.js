import Navbar from "./Navbar";
import Footer from "./Footer";
import Work from "./pages/Work";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactForm from "./componets/ContactForm";
/* import Contact from "./pages/Contact"; */
import "./styles.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<ContactForm />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
