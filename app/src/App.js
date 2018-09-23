import React, { Component } from 'react';
import './App.css';
import Card from './components/card/Card';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>
            Evozon Solitaire
          </h1>
        </header>
        <div className="main">
          <Card number="3" symbol="<3"/>
        </div>  
      </div>
    );
  }
}

export default App;
