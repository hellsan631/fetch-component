import React, { Component, Suspense, lazy } from 'react'
import logo from './logo.svg'
import './App.css'
import Router from './components/Router'
import Switch from './components/Router/Switch'
import Route from './components/Router/Route'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Help = lazy(() => import('./pages/Help'))

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
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/help" component={Help} />
              </Switch>
            </Suspense>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
