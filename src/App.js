import React from 'react';
import { Route } from 'react-router-dom';
import Post from './components/Post';
import './App.css';


function App() {
  return (
    <div className="App">
      <Route path="/" component={Post}/>
    </div>
  );
}

export default App;
