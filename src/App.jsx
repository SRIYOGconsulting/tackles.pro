import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoadBlock from "./components/RoadBlock";
import BackToTop from "./components/BackToTop";
import ExitPopup from "./components/ExitPopup";
import Sidekick from "./components/Sidekick";

export default function App() {
  return (
    <>
      {/* Roadblock overlay */}
      <RoadBlock />

      {/* Exit intent popup */}
      <ExitPopup />

      {/* Scrolls to top whenever the route changes */}
      <ScrollToTop />

      {/* Main navigation header */}
      <Header />

      {/* Page content rendered here */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <BackToTop />

      {/* Floating sidekick */}
      <Sidekick />
    </>
  );
}
