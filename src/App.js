import React, { Component, Suspense, lazy } from 'react'
import logo from './logo.svg'
import './App.css'
import Router, { Switch, Route } from './components/Router'

const Counter = lazy(() => import('./pages/Counter'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Suspense
              fallback={<img src={logo} className="App-logo" alt="logo" />}
            >
              <Switch>
                <Route path="/" component={Counter} />
              </Switch>
            </Suspense>
          </Router>
        </header>
      </div>
    );
  }
}

export default App
