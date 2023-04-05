import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LandingPage />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
