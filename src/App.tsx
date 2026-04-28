import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Trophy } from "lucide-react";
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
import { Banner } from "./components/ui/banner";

const BANNER_H = 44;

function AppLayout() {
  const [showBanner, setShowBanner] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--banner-h",
      showBanner ? `${BANNER_H}px` : "0px"
    );
  }, [showBanner]);

  return (
    <>
      {/* Fixed announcement banner — sits above nav */}
      <div className="fixed top-0 left-0 right-0 z-60">
        <Banner
          show={showBanner}
          onHide={() => setShowBanner(false)}
          icon={<Trophy className="h-4 w-4 text-yellow" />}
          title={
            <>
              <span className="font-semibold text-white">LOA Awards 2025</span>{" "}
              — Applications are now open. Don't miss your chance to shine.
            </>
          }
          action={{
            label: "Apply Now →",
            onClick: () => {
              navigate("/awards");
              setShowBanner(false);
            },
          }}
        />
      </div>

      {/* Nav is offset by banner height via CSS var */}
      <div style={{ marginTop: showBanner ? BANNER_H : 0 }}>
        <Nav />
      </div>

      {/* Content — pages already have pt-16 for the nav */}
      <div style={{ marginTop: showBanner ? BANNER_H : 0 }}>
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
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
