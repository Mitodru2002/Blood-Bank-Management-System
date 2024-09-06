import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./components/Routes/protectedRoute";
import PublicRoute from "./components/Routes/publicRoute";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import Analytics from "./pages/Analytics";
import Consumer from "./pages/Consumer";
import Donateblood from "./pages/Donate_blood";
import HomePage from "./pages/HomePage";
import Hospitals from "./pages/Hospitals";
// import Inventory from "./pages/Inventory";
import Organisation from "./pages/Organisation";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Donars from "./pages/donars";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* ****************************** Admin page *************************** */}
        <Route
          path="/donar-list"
          element={
            <ProtectedRoute>
              <DonarList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/org-list"
          element={
            <ProtectedRoute>
              <OrgList />
            </ProtectedRoute>
          }
        />

        {/* ****************************** hospital page *************************** */}
        <Route
          path="/consumer"
          element={
            <ProtectedRoute>
              <Consumer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Donars />
            </ProtectedRoute>
          }
        />
        {/* ***************************** Organisation Page and User ********************** */}
        <Route
          path="/inventory"
          element={
            <ProtectedRoute>
              <Donateblood />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospitals"
          element={
            <ProtectedRoute>
              <Hospitals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/organisation"
          element={
            <ProtectedRoute>
              <Organisation />
            </ProtectedRoute>
          }
        />
        {/* *************************** home page ************************ */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        {/* ***************************** Analytics****************** */}
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        {/* **************************** LOG REG************************** */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        {/* *************************** Doante Blood section ******************* */}
        <Route path="/Donate_Blood" element={<Donateblood />} />
      </Routes>
    </>
  );
}

export default App;
