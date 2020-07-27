import React from 'react';
import {SideBar} from './containers/SideBar/SideBar';
import {Header} from './containers/Header/Header'
import ContentView from './containers/ContentView/ContentView';
import './App.css';

function App  () {
    return (
        <React.Fragment>
            <Header/>
            <SideBar/>
            <ContentView
                propert1={"hello"}
                propert2={"praveen"}/>
        </React.Fragment>
    )
}

export default App ;
