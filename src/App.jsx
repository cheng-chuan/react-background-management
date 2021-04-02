
import React, { Component } from 'react'
// import {Button} from 'antd'
// import 'antd/dist/antd.css'
import {Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import NotFound from './pages/error/404'

export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/login' component={Login}/> 
          <Route exact path='/404' component={NotFound}/> 
          <Route path='/' component={Admin} />
          <Redirect to='/404' />
        </Switch>
      </>
    )
  }
}

