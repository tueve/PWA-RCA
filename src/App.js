/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from 'containers/pages/HomePage/Loadable'
import NotFoundPage from 'containers/pages/NotFoundPage/Loadable'
import Header from 'containers/layout/Header'
import { Grid } from '@material-ui/core'
// import Footer from 'components/Footer';

export default function App () {
  return (
    <Grid container>
      <Helmet
        titleTemplate='%s - React.js Boilerplate'
        defaultTitle='React.js Boilerplate'
      >
        <meta name='description' content='A React.js Boilerplate application' />
      </Helmet>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='' component={NotFoundPage} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </Grid>
  )
}
