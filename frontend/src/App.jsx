
import { BrowserRouter, Routes, Route } from "react-router-dom";



// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SolarForHome from "./pages/SolarForHome";
import SolarForBusiness from "./pages/SolarForBusiness";
import ContactUs from "./pages/ContactUs";
import TheAshnoraAdvantage from "./pages/TheAshnoraAdvantage";
import Blogs from "./pages/Blogs";
import ScrollToTop from "./components/ScrollToTop";

// Admin
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import Inquary from "./pages/admin/Inquary";
import Setting from "./pages/admin/Setting";
import AdminBlogs from "./pages/admin/Blogs";
import AdminLogin from "./pages/admin/Login";
import { ProtectedRout } from "./components/hookes/ProtectedRout";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/theAshnoraAdvantage" element={<TheAshnoraAdvantage />} />


        <Route
          path="/solar-for-home"
          element={<SolarForHome />}
        />

        <Route
          path="/solar-for-business"
          element={<SolarForBusiness />}
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Public Login Route */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Dashboard Routes */}
        <Route element={<ProtectedRout />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="leads" element={<Leads />} />
            <Route path="inquary" element={<Inquary />} />
            <Route path="blogs" element={<AdminBlogs />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;

