import { createBrowserRouter } from 'react-router';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Speakers from './pages/Speakers';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ConferenceDetail from './pages/ConferenceDetail';

// Speaker pages
import SpeakerDashboard from './pages/speaker/SpeakerDashboard';
import SpeakerConferences from './pages/speaker/SpeakerConferences';
import SpeakerAttendees from './pages/speaker/SpeakerAttendees';
import SpeakerCertificates from './pages/speaker/SpeakerCertificates';
import SpeakerProfile from './pages/speaker/SpeakerProfile';

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard';

/**
 * Configuración de rutas usando React Router Data Mode
 */
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Landing,
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  },
  {
    path: '/conference/:id',
    Component: ConferenceDetail,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/speakers',
    Component: Speakers,
  },
  {
    path: '/about',
    Component: About,
  },
  // Speaker routes
  {
    path: '/speaker/dashboard',
    Component: SpeakerDashboard,
  },
  {
    path: '/speaker/conferences',
    Component: SpeakerConferences,
  },
  {
    path: '/speaker/attendees',
    Component: SpeakerAttendees,
  },
  {
    path: '/speaker/certificates',
    Component: SpeakerCertificates,
  },
  {
    path: '/speaker/profile',
    Component: SpeakerProfile,
  },
  // Admin routes
  {
    path: '/admin/dashboard',
    Component: AdminDashboard,
  },
  {
    path: '/admin/events',
    Component: AdminDashboard, // Placeholder - crear después
  },
  {
    path: '/admin/conferences',
    Component: AdminDashboard, // Placeholder - crear después
  },
  {
    path: '/admin/speakers',
    Component: AdminDashboard, // Placeholder - crear después
  },
  {
    path: '/admin/attendees',
    Component: AdminDashboard, // Placeholder - crear después
  },
  {
    path: '/admin/scanner',
    Component: AdminDashboard, // Placeholder - crear después
  },
  {
    path: '/admin/stats',
    Component: AdminDashboard, // Placeholder - crear después
  },
  {
    path: '*',
    Component: NotFound,
  },
]);