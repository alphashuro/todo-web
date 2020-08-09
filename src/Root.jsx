import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './pages/App'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={App} />
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}  

export default Root