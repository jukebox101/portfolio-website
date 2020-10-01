import React from 'react';
import LandingPage from './LandingPage';
import Resume from './Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
      <div>
        <LandingPage />
        <Resume />        
      </div>

  );
}

export default App;
