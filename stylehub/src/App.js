import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';

import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
