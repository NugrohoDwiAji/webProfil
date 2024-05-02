import React from "react";
import ReactDOM from "react-dom/client";
import AboutPage from "./component/Pages/aboutPage";
import ResumePage from "./component/Pages/resumePage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkPage from "./component/Pages/workPage";
import ContactPage from "./component/Pages/contactPage";
import LandingPage from "./component/Pages/landingPage";
import BgLayout from "./component/Layouts/BgLayout";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/resume", element: <ResumePage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/work", element: <WorkPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BgLayout>
      <RouterProvider router={router} />
    </BgLayout>
  </React.StrictMode>
);
