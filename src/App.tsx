import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import EventGallery from "./pages/EventGallery";
import About from "./pages/About";

import Membership from "./pages/Membership";
import Awards from "./pages/Awards";

import InstitutionalForm from "./pages/InstitutionalForm";
import StudentForm from "./pages/StudentForm";
import CorporateForm from "./pages/CorporateForm";

function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Delay slightly to let the page render first if coming from another route
      setTimeout(() => {
        gsap.to(window, {
          scrollTo: location.hash,
          duration: 1.2, // 50% slower than native (~0.8s)
          ease: "power3.inOut",
        });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, location.hash]);

  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.hash &&
        anchor.pathname === window.location.pathname
      ) {
        e.preventDefault();
        window.history.pushState(null, "", anchor.hash);
        gsap.to(window, {
          scrollTo: anchor.hash,
          duration: 1.2, // Increased smooth scroll duration
          ease: "power3.inOut",
        });
      }
    };

    document.addEventListener("click", handleHashClick);
    return () => document.removeEventListener("click", handleHashClick);
  }, []);

  return (
    <>
      {/* Fixed announcement banner above navbar */}
      {/* <div className="fixed top-0 left-0 right-0 z-[60]">
        <DelegateBanner />
      </div> */}

      <div className="relative">
        <Nav />
      </div>

      {/* Content — offset by banner height via CSS var */}
      <div style={{ marginTop: "var(--banner-h, 0px)", transition: "margin-top 0.3s ease-out" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:eventId" element={<EventGallery />} />
          <Route path="/about" element={<About />} />


          <Route path="/membership" element={<Membership />} />
          <Route path="/awards" element={<Awards />} />

          <Route
            path="/membership/institutional"
            element={<InstitutionalForm />}
          />
          <Route path="/membership/student" element={<StudentForm />} />
          <Route path="/membership/corporate" element={<CorporateForm />} />
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
