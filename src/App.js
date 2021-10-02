import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Card />
    </div>
  );
}

export default App;
