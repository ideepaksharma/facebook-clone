import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM naming convention
    <div className="app">

      {!user ? //if condition to check for the user
        (
          <Login />
        )
        :
        (
          <div>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </div>
        )}

    </div>
  );
}

export default App;
