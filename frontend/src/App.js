import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ContactUs from "./components/home/ContactUs";
import HomePage from "./components/home/HomePage";
import UploadCertificate from "./components/students/UploadCertificate";
import StudentDashboard from "./components/students/StudentDashboard";
import GradeCertificate from "./components/teachers/GradeCertificate";
import Announcement from "./components/home/Announcements";
import Login from "./pages/Login";
import Signup from "./pages/Teacherlogin";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Certificates from "./components/students/UploadCertificate";
import TeacherLogin from "./pages/Teacherlogin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadCertificate />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/grade" element={<GradeCertificate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faculty-login" element={<TeacherLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/about" element={<Certificates/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
