import { Fragment } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './Components/Header/Header';
import { TheLayout } from './Components/Layout/TheLayout';
import { Dashboard } from './Screens/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <TheLayout/>
    </Router>

  );
}

export default App;
