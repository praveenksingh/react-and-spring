import React from 'react';
import {Image, Menu} from 'semantic-ui-react';
import './Header.scss';
import logo from '../../assets/images/logo.png';

export class Header extends React.Component {

    render() {
        return (
            // 1
            <Menu borderless className='top-menu' fixed='top'>
                {/* 2 */}
                <Menu.Item header className='logo'>
                    PK Singh WebSite
                    {/*<Image src={logo} size='tiny'/>*/}
                </Menu.Item>
                {/* userName */}
                <Menu.Menu className='nav-container'>
                    <Menu.Menu position='right'>
                        <Menu.Item name='avatar'>
                            username
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;
