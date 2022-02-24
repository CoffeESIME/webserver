import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { SignIn } from '../arduardoSignIn';
import { Header } from '../arduardoHeader';
import {Footer} from '../arduardoFooter';
import { LogIn } from '../arduardoLogIn';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/log-in" element={<LogIn/>} />
        <Route path="/sign-in" element={<SignIn/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
