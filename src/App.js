import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AllCourses from './pages/AllCourses';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute'; // import here
import { useState, useEffect } from 'react';
import { getUser } from './utils/auth';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = getUser();
    setIsLoggedIn(!!storedUser);
  }, []);

  return (
    <Router basename="/E-learning">
      <ScrollToTop /> 
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />

        <Route
          path="/courses"
          element={
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          }
        />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route
          path="/courses/:id"
          element={
            <PrivateRoute>
              <CourseDetail />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          </PrivateRoute>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
