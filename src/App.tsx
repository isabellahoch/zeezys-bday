import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/polymet/layouts/main-layout";
import LandingPage from "@/polymet/pages/landing-page";

export default function MainPrototype() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <LandingPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}
