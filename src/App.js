import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import CategoriesContainer from './components/CategoriesContainer';
import CocktailContainer from './components/CocktailContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cocktail Search</h1>
        </header>
        <p className="App-intro">
          To get started, click a cocktail category
        </p>
      <main>
        <Route exact path ='/' component={CategoriesContainer}/>
        <Route exact path ='/:categoryId' component={CocktailContainer}/>
      </main>
      </div>
    );
  }
}

export default App;
