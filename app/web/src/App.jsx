import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import RadioPlayerWidget from './components/RadioPlayerWidget.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import ProgramDetailsPage from './pages/ProgramDetailsPage.jsx';
import SpaceDetailsPage from './pages/SpaceDetailsPage.jsx';
import RadioPage from './pages/RadioPage.jsx';
import GeSoBeafrikaPage from './pages/GeSoBeafrikaPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import DonatePage from './pages/DonatePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import FounderPage from './pages/FounderPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:id" element={<ProgramDetailsPage />} />
        <Route path="/radio" element={<RadioPage />} />
        <Route path="/ge-so-beafrika" element={<GeSoBeafrikaPage />} />
        <Route path="/ge-so-beafrika/:id" element={<SpaceDetailsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <RadioPlayerWidget />
      <Toaster />
    </Router>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">Page not found</p>
        <a href="/" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200">
          Back to home
        </a>
      </div>
    </div>
  );
}

export default App;