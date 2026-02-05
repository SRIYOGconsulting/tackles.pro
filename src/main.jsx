import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocationProvider } from "./context/LocationContext.jsx"; 
import "./index.css";
import App from "./App.jsx";

// 🌍 Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Book from "./pages/Book.jsx";
import Gallery from "./pages/Gallery.jsx";
import Team from "./pages/Team.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import FAQ from "./pages/FAQ.jsx";

// ⭐ NEW — Privacy Page
import Privacy from "./pages/Privacy.jsx";

// ⭐ NEW — Terms of Service Page
import Terms from "./pages/Terms.jsx";

// ⭐ NEW — Disclaimer Page     
import Disclaimer from "./pages/Disclaimer.jsx";

// ⭐ NEW — Feedback Page
import Feedback from "./pages/Feedback.jsx";

// 🧭 Router setup
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/book", element: <Book /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/team", element: <Team /> },

      { path: "/testimonials", element: <Testimonials /> },
      { path: "/faq", element: <FAQ /> },

      // ⭐ NEW — Privacy Route
      { path: "/privacy-policy", element: <Privacy /> },

      // ⭐ NEW — Terms of Service Route
      { path: "/terms", element: <Terms /> },

      // ⭐ NEW — Disclaimer Route
      { path: "/disclaimer", element: <Disclaimer /> },

      // ⭐ NEW — Feedback Route
      { path: "/feedback", element: <Feedback /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocationProvider>
      <RouterProvider router={router} />
    </LocationProvider>
  </React.StrictMode>
);
