import { createBrowserRouter } from 'react-router';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Speakers from './pages/Speakers';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ConferenceDetail from './pages/ConferenceDetail';

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
  {
    path: '*',
    Component: NotFound,
  },
]);