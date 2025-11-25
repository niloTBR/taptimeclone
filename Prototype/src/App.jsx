import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ScrollToTop from '@/components/common/ScrollToTop'
import HomePage from '@/pages/HomePage'
import BrowsePage from '@/pages/BrowsePage'
import JourneyPage from '@/pages/JourneyPage'
import JoinExpertPage from '@/pages/JoinExpertPage'
import ExpertProfilePage from '@/pages/ExpertProfilePage'
import BookingPage from '@/pages/BookingPage'
import LoginPage from '@/pages/LoginPage'
import SignUpPage from '@/pages/SignUpPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import FAQPage from '@/pages/FAQPage'
import FeedbackPage from '@/pages/FeedbackPage'
import HowItWorksPage from '@/pages/HowItWorksPage'
import CareersPage from '@/pages/CareersPage'
import BlogPage from '@/pages/BlogPage'
import PressPage from '@/pages/PressPage'
import HelpPage from '@/pages/HelpPage'
import SafetyPage from '@/pages/SafetyPage'
import GuidelinesPage from '@/pages/GuidelinesPage'
import CommunityPage from '@/pages/CommunityPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'
import AdminUserDashboard from '@/pages/admin/AdminUserDashboard'
import AdminExpertDashboard from '@/pages/admin/AdminExpertDashboard'
import CMSDashboard from '@/pages/cms/CMSDashboard'
import UserDashboard from '@/pages/user/UserDashboard'
import UserDashboardTest from '@/pages/user/UserDashboardTest'
import ExpertDashboard from '@/pages/expert/ExpertDashboard'
import AdminDashboard from '@/pages/admin/AdminDashboard'
import SignUpUserPage from '@/pages/SignUpUserPage'
import SignUpExpertPage from '@/pages/SignUpExpertPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/join-expert" element={<JoinExpertPage />} />
          <Route path="/expert/:id" element={<ExpertProfilePage />} />
          <Route path="/book/:expertId" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/user" element={<SignUpUserPage />} />
        <Route path="/signup/expert" element={<SignUpExpertPage />} />
        <Route path="/admin/user" element={<AdminUserDashboard />} />
        <Route path="/admin/expert" element={<AdminExpertDashboard />} />
        <Route path="/cms" element={<CMSDashboard />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/dashboard-test" element={<UserDashboardTest />} />
        <Route path="/expert/dashboard" element={<ExpertDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
