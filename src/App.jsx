import { Routes, Route } from "react-router-dom";
import './index.css';

import Home from "./pages/Home";
import Travel from "./pages/Travel";
import Hobby from "./pages/Hobby";
import Food from "./pages/Food";
import Fashion from "./pages/Fashion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/food" element={<Food />} />
        <Route path="/fashion" element={<Fashion />} />
      </Routes>
    </>
  );
}


export default App;
