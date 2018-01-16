import React from 'react'
import { Router, Link } from 'react-static'
import App from 'grommet/components/App'
//
import Routes from 'react-static-routes'
//
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import client from './connectors/apollo'
import store from './connectors/redux'
import '../node_modules/grommet-css'
// import './app.css'

export default () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App centered={false}>
        <Router>
          <div>
            <nav>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
            </nav>
            <div className="content">
              <Routes />
            </div>
          </div>
        </Router>
      </App>
    </Provider>
  </ApolloProvider>
)
