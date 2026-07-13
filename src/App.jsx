import { useState } from "react";
import HomePage from "./pages/HomePage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import GeneratorPage from "./pages/GeneratorPage";

export default function LandingPage() {
  const [subject, setSubject] = useState("IGCSE ICT");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route paht="/">
        <Route index element={<HomePage />} />
        <Route path="home" element={<GeneratorPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}
