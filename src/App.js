import React, { useState } from 'react';
import './App.css';
import users from './Data/data'
//import data from './Data/data';
import Users from './Components/Users';
import AddUser from './Components/AddUser';
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UpdateUser from './Components/UpdateUser'

function App() {
  const [userdata, setUserdata] = useState(users)
  console.log(userdata);
  const history = useHistory()


  return (
    <div className="App">

    
    
    <Switch>

      <Route exact path="/">
             
        <Users
          userdata={userdata}
          setUserdata={setUserdata}
        />
      </Route>

      <Route path="/add">
        <AddUser
          userdata={userdata}
          setUserdata={setUserdata}
        />
      </Route>

      <Route path="/edit/:id">
        <UpdateUser
          userdata={userdata}
          setUserdata={setUserdata}
        />
      </Route>

    </Switch>

    </div>
  );
}

export default App;
