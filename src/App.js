import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './Pages/MainRoutes';

const App = () => (
  <Router>
    <MainRoutes />
  </Router>
);

export default App;
