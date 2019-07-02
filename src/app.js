import React, {Component} from 'react'
import {Switch,  Route} from 'react-router-dom'
import {Button} from 'antd'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
                <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" component={Admin}></Route>
                </Switch>
        )
    }
}
export default App