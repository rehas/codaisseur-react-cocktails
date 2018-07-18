import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import CategoriesContainer from './components/CategoriesContainer';
import CocktailContainer from './components/CocktailContainer';
import CocktailDetailContainer from './components/CocktailDetailContainer';

class App extends Component {
  render() {
    console.log(this)
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
        <Route exact path ='/:categoryId/:cocktailId' component={CocktailDetailContainer}/>
      </main>
      </div>
    );
  }
}

export default App;
