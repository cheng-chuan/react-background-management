import React, { Component } from 'react'
import LayOut from '../../components/layout'
import {Route,Switch} from 'react-router-dom'

// 二级路由
import Home from '../secondaryRouter/home'
import Nav from '../secondaryRouter/nav'

export default class Admin extends Component {
    render() {
        return (
            <div style={{height:'100%'}}>
                <LayOut>
                    <Switch>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/nav' component={Nav}/>
                    </Switch>
                </LayOut>
            </div>
        )
    }
}
