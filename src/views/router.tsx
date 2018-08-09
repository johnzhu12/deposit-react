import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './home/home'

class Router extends React.Component<{}, {}>{
    render() {
        return (
            <Switch>
                <Route path='/service' component={HomePage} />
                <Route path='/info' component={HomePage} />
                <Route path='/home' component={HomePage} />
                <Redirect to='/home' />
            </Switch>
        )
    }
}

export default Router