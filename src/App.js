import React from 'react';
import LandingPage from './LandingPage';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Switch> 
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
