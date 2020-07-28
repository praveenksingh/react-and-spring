import React from 'react';
import welcomeImage from '../../assets/images/logo_transparent.png';
import './Home.scss';

export class Home extends React.Component {
    render() {
        console.log("hello from inside Home")
        return (
            <div className='home-view'>
                <div className='home-grid-container'>
                    <img src={welcomeImage} alt="Website Home"/>
                    <br/>
                    <p style={{textAlignVertical: "center",textAlign: "center",}}>
                        Welcome to home page, we need to get this properly indented
                    </p>  
                </div>
            </div>
        );
    }
}

export default Home;
