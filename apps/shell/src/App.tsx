import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { LanguageProvider } from './providers/LanguageProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BookingPage } from './pages/BookingPage';
import { BarbersPage } from './pages/BarbersPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { MyBookingsPage } from './pages/MyBookingsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LegalPage } from './pages/LegalPage';
import { logger } from './utils/logger';

function AppContent(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* The remotes own every route below these prefixes. The wildcard keeps
            the shell from rendering its 404 page over a mounted single-spa app. */}
        <Route path="services/*" element={<ServicesPage />} />
        <Route path="booking/*" element={<BookingPage />} />
        <Route path="barbers" element={<BarbersPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="offers" element={<Navigate to="/services/offers" replace />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="my-bookings" element={<MyBookingsPage />} />
        <Route path="privacy" element={<LegalPage type="privacy" />} />
        <Route path="terms" element={<LegalPage type="terms" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default function App(): JSX.Element {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        logger.error('App error boundary caught an error', { error, errorInfo });
      }}
    >
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <AppContent />
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
