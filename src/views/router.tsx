import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './home/home'
import ServicePage from './service/service'
import InfoPage from './info/info'

class Router extends React.Component<{}, {}>{
    render() {
        return (
            <Switch>
                <Route path='/service' component={ServicePage} />
                <Route path='/info' component={InfoPage} />
                <Route path='/home' component={HomePage} />
                <Redirect to='/home' />
            </Switch>
        )
    }
}

export default Router