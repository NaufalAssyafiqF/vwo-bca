import { Routes, Route } from "react-router-dom";
import './index.css';

import Home from "./pages/Home";
import Travel from "./pages/Travel";
import Hobby from "./pages/Hobby";
import Food from "./pages/Food";
import Fashion from "./pages/Fashion";
import Case1 from "./pages/Case1";
import Case2 from "./pages/Case2";
import DetailCase2 from "./pages/DetailCase2";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/food" element={<Food />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/case1" element={<Case1 />} />
        <Route path="/case2" element={<Case2 />} />
        <Route path="/case2/detail" element={<DetailCase2 />} />
      </Routes>
    </>
  );
}


export default App;
