import React, {Component, useState, useEffect} from 'react';
import {SideBar} from './containers/SideBar/SideBar';
import {Header} from './containers/Header/Header'
import './App.css';

function App  () {
    return (
        <React.Fragment>
            <Header/>
            <SideBar/>
            {/*<HomeContent*/}
            {/*    bottomReachedCallback={this.bottomReachedCallback}*/}
            {/*    showLoader={this.shouldShowLoader()}/>*/}
        </React.Fragment>
    )
}

export default App ;
