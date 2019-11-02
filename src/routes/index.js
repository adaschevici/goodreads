import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from '../components/app'
import EditBook from '../components/edit'

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" render={props => <App {...props} />} />
          <Route path="/edit" render={() => <EditBook />} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
)

Routes.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default Routes
