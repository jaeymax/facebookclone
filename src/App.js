import React, { useContext } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { StateContext } from './StateProvider';

function App() {
  
  const {user} = useContext(StateContext);
  console.log(user);
  return (
    <div className = 'app' >
      {
        !user? (<Login/>):(
          <>
          <Header/>
          <div className = 'app__body' >
            <Sidebar/>
            <Feed/>
            {/* <Widgets/> */}
          </div>
          </>
        )
      }
    </div>
  );
        
  
}

export default App;
