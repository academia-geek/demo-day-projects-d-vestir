import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { loginEmailPassword } from '../actions/actionLogin';

import Login from '../components/Login';
import { Registro } from '../components/Registro';

import DashboardRoute from './DashboardRoute';
import PrivateRouters from './PrivateRouters';
import PublicRouters from './PublicRouters';
import Header from "../components/Header";
import LandingPage from "../components/landing/LandingPage";
import Footer from '../components/Footer';
import Loading from "../components/loading/Loading";

function AppRouter() {

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [setIsLoggedIn, setChecking])

  if (checking) {
    return (
      <Loading />
    )
  }



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/landing" element={
          <PublicRouters isAut={isLoggedIn}>
            <LandingPage />
          </PublicRouters>
        } />

        <Route path="/login" element={
          <PublicRouters isAut={isLoggedIn}>
            <Login />
          </PublicRouters>} />


        <Route path="/registro" element={
          <PublicRouters isAut={isLoggedIn}>
            <Registro />
          </PublicRouters>

        } />

        <Route path="/*" element={<PrivateRouters isAut={isLoggedIn}>
          <DashboardRoute />
        </PrivateRouters>} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}



export default AppRouter