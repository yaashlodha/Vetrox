/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// 1. Change /next to /react
import { Analytics } from "@vercel/analytics/react"; 

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      
      {/* 2. Place the component here */}
      <Analytics />
    </>
  );
}