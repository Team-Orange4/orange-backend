import React from 'react';
import { Route } from 'react-router-dom';
import Posts from './components/Posts';
import './App.css';


function App() {
  return (
    <div className="App">
      <Route path="/" component={Posts}/>
    </div>
  );
}

export default App;
