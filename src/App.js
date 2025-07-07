// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Notution from './pages/Notution';
import NoTuitionsPage from './pages/NoTuitionsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notution" element={<Notution />} />
        <Route path="/no-tuitions" element={<NoTuitionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
