import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<Aboutus />} path="/about-us" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </Router>
  );
}

export default App;
