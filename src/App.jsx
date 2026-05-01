import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./NotFound";
import About from "./components/About";
import Packages from "./components/Packages";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/testimonials" element={<Packages />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
