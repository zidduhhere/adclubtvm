import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Instagram from "./pages/Instagram";
import EventDetail from "./pages/EventDetail";
import Membership from "./pages/Membership";
import Awards from "./pages/Awards";
import LivingRoom from "./pages/LivingRoom";
import MaintenanceOverlay from "./components/MaintenanceOverlay";
import { MAINTENANCE_MODE } from "./config/maintenance";

function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="relative">
        <Nav />
      </div>

      {/* Content — pages already have pt-16 for the nav */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/living-room" element={<LivingRoom />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  if (MAINTENANCE_MODE) {
    return <MaintenanceOverlay />;
  }

  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
