import React  from 'react'
import './App.css';
import UserTable from './UserTable';


function App() {
  return (
    <div className="App">
      <h1 style={{color: "red",textAlign:"center"}}>User-Form</h1>
      <UserTable/>
    </div>
  );
}

export default App;
