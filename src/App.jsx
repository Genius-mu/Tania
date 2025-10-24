import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
