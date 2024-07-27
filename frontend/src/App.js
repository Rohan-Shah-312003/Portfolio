import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <div className="row">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
