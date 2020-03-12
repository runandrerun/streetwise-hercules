import React from 'react';
import Homepage from './pages/Homepage/Homepage.component';
import Blog from './pages/Blog/Blog.component';
import Portfolio from './pages/Portfolio/Portfolio.component';
import { Switch, Route } from 'react-router-dom';
import './App.styles.scss';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
