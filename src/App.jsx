import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showGuestModal } from './redux/slices/guestSlice';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import ScrollToTopButton from './components/common/ScrollToTopButton';

// Pages
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    // Check if we should show guest modal on Jobs page
    const savedGuestMode = localStorage.getItem('guestMode');
    if (!isAuthenticated && !savedGuestMode) {
      // Guest modal will be shown by the Jobs page component
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Redirect all other routes to /jobs */}
            <Route path="/" element={<Navigate to="/jobs" replace />} />
            <Route path="/home" element={<Navigate to="/jobs" replace />} />
            <Route path="/events" element={<Navigate to="/jobs" replace />} />
            <Route path="/directory" element={<Navigate to="/jobs" replace />} />
            <Route path="/news" element={<Navigate to="/jobs" replace />} />
            
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/jobs" replace />} />
          </Routes>
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
