import React from 'react';
import {Divider, Menu} from 'semantic-ui-react';
import './SideBar.scss';
import {SideBarHeader} from './SideBarHeader/SideBarHeader';
import SideBarItem from './SideBarItem/SideBarItem';

export class SideBar extends React.Component {
    render() {
        return(
            <Menu borderless vertical stackable fixed='left' className='side-nav'>
                <SideBarHeader title='Library'/>
                <SideBarItem label='History' icon='history'/>
                <SideBarItem label='Watch later' icon='clock'/>
                <SideBarItem label='Liked videos' icon='thumbs up'/>
                <Divider/>
                <SideBarHeader title='Praveen'/>
                <SideBarItem label='Singh' icon='history'/>
                <SideBarItem label='Hello' icon='clock'/>
                <SideBarItem label='Yo' icon='thumbs up'/>
                <Divider/>
            </Menu>
        );
    }
}