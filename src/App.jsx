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
import Case3 from "./pages/Case3";
import Case4 from "./pages/Case4";
import DetailCase4 from "./pages/DetailCase4";


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
        <Route path="/case3" element={<Case3 />} />
        <Route path="/case4" element={<Case4 />} />
        <Route path="/case4/detail" element={<DetailCase4 />} />
      </Routes>
    </>
  );
}


export default App;
