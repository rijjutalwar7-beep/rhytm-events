import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Events } from "./pages/Events";
import { EventDetail } from "./pages/EventDetail";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";
import { LegalPage } from "./pages/Legal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />

          {/* Legal routes */}
          <Route
            path="privacy-policy"
            element={<LegalPage title="Privacy Policy" />}
          />
          <Route
            path="terms-conditions"
            element={<LegalPage title="Terms & Conditions" />}
          />
          <Route
            path="refund-policy"
            element={<LegalPage title="Refund Policy" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
