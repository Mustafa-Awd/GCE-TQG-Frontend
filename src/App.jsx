import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import GeneratorPage from "./pages/GeneratorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LandingPage />} />
      <Route path="generate" element={<GeneratorPage />} />
    </Route>,
  ),
);
export default function App() {
  return <RouterProvider router={router} />;
}
