import React from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import UserForm from './components/forms/User';


function App() {


  return (
    <div className="App">
      <UserForm handleSubmit={user => {console.log(user)}} />
    </div>
  );
}

export default App;
