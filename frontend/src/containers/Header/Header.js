import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './Header.scss';

export class Header extends React.Component {

    render() {
        return (
            // 1
            <Menu borderless className='top-menu' fixed='top'>
                {/* 2 */}
                <Link to="/">
                    <Menu.Item header className='logo'>
                        PK Singh WebSite {/*Change this with product logo*/}
                        {/*<Image src={logo} size='tiny'/>*/}
                    </Menu.Item>
                </Link>
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

export default withRouter(Header);
