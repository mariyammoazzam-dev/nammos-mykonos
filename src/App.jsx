import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FirstSection from "./Components/FirstSection/FirstSection";
import SummerLife from "./Components/SummerLife/SummerLife";
import Nammos from "./Nammos/Nammos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <FirstSection />
              <SummerLife />
            </>
          }
        />

        <Route path="/nammos" element={<Nammos />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;