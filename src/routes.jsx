import React from 'react';
import Home from './pages/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SonarPost from './Posts/Sonar';
import Topics from './pages/Topics/Topics';
import Scanner from './Posts/Scanner';
import BarsCode from './Posts/BarsCode';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/posts" component={Topics}/>
                <Route path="/sonar" component={SonarPost}/>
                <Route path="/scanner" component={Scanner}/>
                <Route path="/barcode" component={BarsCode}/>
            </Switch>
        </ BrowserRouter>
    )
};