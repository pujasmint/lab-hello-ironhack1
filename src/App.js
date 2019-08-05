import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';
import Content from './Content';
import './Content.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Content />
      <Card />
      </div>
  );
}

export default App;
