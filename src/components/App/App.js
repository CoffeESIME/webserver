import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "../ArduardoSignIn/index.js";
import { Header } from "../ArduardoHeader";
import { Footer } from "../ArduardoFooter";
import { LogIn } from "../ArduardoLogIn";
import { InitialMenu } from "../InitialMenu";
import { LastDataArduardo } from "../LastDataArduardo";
import { NavBar } from "../NavBar";
import { getCurrentUser, logOut } from "../../services/auth.service";
import { ProtectedRoutes } from "../ProtectedRoutes";
function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    console.log(localStorage.getItem("user"));
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <NavBar user={currentUser} logOut={logOut}></NavBar>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoutes redirectTo="/log-in">
                <LastDataArduardo />
              </ProtectedRoutes>
            }
          />
          <Route path="/" element={<InitialMenu />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
