/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import { Provider } from 'react-redux'
import { createDevTools } from 'redux-devtools'

import FontFaceObserver from 'fontfaceobserver'

// Import root app
import App from './App'

// Load the .htaccess file
import 'file-loader?name=[name].[ext]!./.htaccess' // eslint-disable-line import/no-webpack-loader-syntax

import configureStore from './configureStore'

// Import CSS reset and Global Styles
import './global-styles'

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {})

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded')
})

// Init redux-Devtool
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow' preserveScrollTop={false} />
  </DockMonitor>
)

// Create redux store with history
const initialState = {}
const store = configureStore(initialState, DevTools.instrument())
const MOUNT_NODE = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>,
    MOUNT_NODE
  )
}

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
  })
}

// Render root component
render()
registerServiceWorker()

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
// if (process.env.NODE_ENV === 'production') {
// require('offline-plugin/runtime').install() // eslint-disable-line global-require
// }
