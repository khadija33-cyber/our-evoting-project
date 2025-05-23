import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Components
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

// Pages
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ElectionsPage from "./pages/ElectionsPage";
import ElectionDetailsPage from "./pages/ElectionDetailsPage";
import VotePage from "./pages/VotePage";
import ResultsPage from "./pages/ResultsPage";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import CreateElectionPage from "./pages/CreateElectionPage";
import EditElectionPage from "./pages/EditElectionPage";
import BlockchainStatusPage from "./pages/BlockchainStatusPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import ResendVerificationPage from "./pages/ResendVerificationPage";
import OTPVerificationPage from "./pages/OTPVerificationPage";
import FeaturesPage from "./pages/featurespage";
import HowItWorksPage from "./pages/howitworkspage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MainLayout from "./components/MainLayout";

function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Pages without header */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* Routes with headers/layouts */}
      <Route element={<MainLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
        <Route path="verify-otp" element={<OTPVerificationPage />} />
        <Route path="resend-verification" element={<ResendVerificationPage />} />
        <Route path="elections" element={<ElectionsPage />} />
        <Route path="elections/:id" element={<ElectionDetailsPage />} />
        <Route path="results/:id" element={<ResultsPage />} />
        <Route path="vote/:id" element={<ProtectedRoute><VotePage /></ProtectedRoute>} />
        <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="admin" element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />
        <Route path="admin/elections/create" element={<AdminRoute><CreateElectionPage /></AdminRoute>} />
        <Route path="admin/elections/:id/edit" element={<AdminRoute><EditElectionPage /></AdminRoute>} />
        <Route path="admin/blockchain" element={<AdminRoute><BlockchainStatusPage /></AdminRoute>} />
      </Route>
    </Routes>
  );
}

export default App;
