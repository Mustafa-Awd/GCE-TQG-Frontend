import { useState } from "react";
import HomePage from "./pages/HomePage";
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
      <Route index element={<HomePage />} />
      <Route path="home" element={<GeneratorPage />} />
    </Route>,
  ),
);
export default function App() {
  return <RouterProvider router={router} />;
}
