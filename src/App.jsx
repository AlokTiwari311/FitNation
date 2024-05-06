import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import FAQ from "./components/FAQ"
import { useEffect, useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";

  return (
    <div className="w-screen h-screen flex flex-col">
      {!isDashboardPage && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route path="/faq" element={<FAQ isLoggedIn={isLoggedIn} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>

    </div>
  );
}

export default App;