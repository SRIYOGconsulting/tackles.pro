import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { LocationProvider } from "./context/LocationContext.jsx";
import "./index.css";
import App from "./App.jsx";

// 🌍 Pages
import Home from "./pages/Home.jsx";
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Book = lazy(() => import("./pages/Book.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const Team = lazy(() => import("./pages/Team.jsx"));
const Testimonials = lazy(() => import("./pages/Testimonials.jsx"));
const FAQ = lazy(() => import("./pages/FAQ.jsx"));
const Privacy = lazy(() => import("./pages/Privacy.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const Disclaimer = lazy(() => import("./pages/Disclaimer.jsx"));
const Feedback = lazy(() => import("./pages/Feedback.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.jsx"));

// Lazy Loading Fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-800"></div>
  </div>
);

// 🧭 Router setup
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <Suspense fallback={<PageLoader />}><About /></Suspense> },
      { path: "/services", element: <Suspense fallback={<PageLoader />}><Services /></Suspense> },
      { path: "/allservice", element: <Navigate to="/services" replace /> },
      { path: "/contact", element: <Suspense fallback={<PageLoader />}><Contact /></Suspense> },
      { path: "/book", element: <Suspense fallback={<PageLoader />}><Book /></Suspense> },
      { path: "/gallery", element: <Suspense fallback={<PageLoader />}><Gallery /></Suspense> },
      { path: "/team", element: <Suspense fallback={<PageLoader />}><Team /></Suspense> },
      { path: "/testimonials", element: <Suspense fallback={<PageLoader />}><Testimonials /></Suspense> },
      { path: "/faq", element: <Suspense fallback={<PageLoader />}><FAQ /></Suspense> },
      { path: "/privacy-policy", element: <Suspense fallback={<PageLoader />}><Privacy /></Suspense> },
      { path: "/terms", element: <Suspense fallback={<PageLoader />}><Terms /></Suspense> },
      { path: "/disclaimer", element: <Suspense fallback={<PageLoader />}><Disclaimer /></Suspense> },
      { path: "/feedback", element: <Suspense fallback={<PageLoader />}><Feedback /></Suspense> },
      { path: "/blog", element: <Suspense fallback={<PageLoader />}><Blog /></Suspense> },
      { path: "/blog/:slug", element: <Suspense fallback={<PageLoader />}><BlogPost /></Suspense> },
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
