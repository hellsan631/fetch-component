import React, { Component, Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

const Username = lazy(() => import('./components/Username'))
const Email = lazy(() => import('./components/Email'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Suspense
            fallback={<img src={logo} className="App-logo" alt="logo" />}
          >
            <Title id="app-title" />
            <Email />
            <Username />
          </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
