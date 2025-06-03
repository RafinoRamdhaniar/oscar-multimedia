import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";


function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="pt-8"></div>
      {/* Hanya tampil di halaman home */}
      {location.pathname === "/" && <Header />}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
