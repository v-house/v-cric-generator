import "./App.css";
import Footer from "./components/Footer";
// import Notification from "./components/Notification";
// import Doubt from "./components/Doubt";
import Matchpage from "./components/Matchpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar2 from "./components/Navbar2";
import Navbar from "./components/Navbar";
import Currentmatches from "./components/Currentmatches";
// import Bug from "./components/Bug";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />

          {/* <Navbar2 /> */}
          <Routes>
            <Route path="/match" element={<Matchpage />} />
            <Route path="/" element={<Currentmatches />} />
            {/* <Route path="/" element={<Notification />} /> */}
            {/* <Route path="/reportbug" element={<Bug />} /> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
