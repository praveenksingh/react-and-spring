import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ContentView from './containers/ContentView/ContentView';
import { Header } from './containers/Header/Header';
import { Home } from './containers/Home/Home';
import { SideBar } from './containers/SideBar/SideBar';

function App() {
    return (
        <React.Fragment>
            <Header />
            <SideBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/mappings" exact component={ContentView} />
                {/* This redirect needs to be at the end here or everthing will be redirected to home, this takes care of unknown paths */}
                <Redirect from='*' to='/' />
            </Switch>
            {/* <ContentView/> */}
        </React.Fragment>
    )
}

export default App;
