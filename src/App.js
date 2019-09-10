import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Mac from './components/Mac';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/Mac" component={Mac}/>
    </div>
  );
}

export default App;
