/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LandingPage from "./pages/LandingPage";
import { Analytics } from "@vercel/analytics/react"; 

export default function App() {
  return (
    <>
      <LandingPage />
      <Analytics />
    </>
  );
}