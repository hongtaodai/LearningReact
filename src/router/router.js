import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Home from '../pages/Home'
import Page1 from '../pages/Page1'

const getRouter = () =>{
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">page1</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/page1" component={Page1}></Route>
            </Switch>
        </div>
    </Router>
};

export default getRouter;