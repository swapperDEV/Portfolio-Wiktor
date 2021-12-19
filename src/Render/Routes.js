import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import Admin from '../Admin/admin'

const RoutesComponent = () => {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={Portfolio}/>
            <Route exact path='/admin' component={Admin}/>
          </Switch>
        </Router>
    )
}

export default RoutesComponent