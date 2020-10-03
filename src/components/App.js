import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';



function App() {
  return (
    <Router>
      <div>
        <Switch> 
          <Route exact path='/contact'>
            <Contact/>
          </Route>
          <Route exact path='/projects'>
              <Projects/>
            </Route>  
          <Route exact path='/resume'>
            <Resume/>
          </Route>
          <Route exact path='/'>
            <LandingPage/>
          </Route>            
        </Switch>        
      </div>      
    </Router>
  );
}

export default App;
