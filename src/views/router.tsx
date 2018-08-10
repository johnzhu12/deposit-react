import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './home/home'
import ServicePage from './service/service'
import InfoPage from './info/info'
import MangerPage from './manger/manger'
import VoterPage from './voter/voter'

class Router extends React.Component<{}, {}>{
    render() {
        return (
            <Switch>
               
                <Route path='/service' component={ServicePage} />
                <Route path='/info' component={InfoPage} />
                <Route path='/home' component={HomePage} />
                <Route path='/manger' component={MangerPage} />
                <Route path='/voter' component={VoterPage} />
                
            </Switch>
        )
    }
}

export default Router