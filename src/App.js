import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Helmet
          titleTemplate='React.js Boilerplate CRA PWA'
          defaultTitle='React.js Boilerplate CRA PWA'
        >
          <meta
            name='description'
            content='A pwa React.js Boilerplate application'
          />
        </Helmet>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default App
