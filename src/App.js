import React, { useState } from 'react';

import './App.css';
import Users from './Components/Users';

import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  
  const history = useHistory()

  // data
  


  return (
    <div className="App">

    
    
    <Switch>

      <Route exact path="/">
             
        <Users
          
        />
      </Route>

      

    </Switch>

    </div>
  );
}

export default App;
