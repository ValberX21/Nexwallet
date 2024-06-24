import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoadingScreen from './LoadingScreen'; // Atualize o caminho conforme necessário

const Welcome = lazy(() => import('./Welcome/welcome.tsx'));
const Login = lazy(() => import('./Auth/Login/login.tsx'));
const Register = lazy(() => import('./Auth/Register/register.tsx'));
const Home = lazy(() => import('./Home/home.tsx'));
const ErrorScreen = lazy(() => import('./ErrorScreen/ErrorScreen.tsx'));

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const preloadComponent = (component: () => Promise<{ default: React.ComponentType<any> }>): void => {
  component().then();
};

const AppRoutes: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    preloadComponent(() => import('./Welcome/welcome.tsx'));
    preloadComponent(() => import('./Auth/Login/login.tsx'));
    preloadComponent(() => import('./Auth/Register/register.tsx'));
    preloadComponent(() => import('./Home/home.tsx'));
    preloadComponent(() => import('./ErrorScreen/ErrorScreen.tsx'));

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen setLoading={setLoading} />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen setLoading={setLoading} />}>
        <Routes>
          <Route path="/" element={<PageTransition><Welcome /></PageTransition>} />
          <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
          <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
          <Route path="/home" element={<PageTransition><Home /></PageTransition>} />
          <Route path="*" element={<PageTransition><ErrorScreen /></PageTransition>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
