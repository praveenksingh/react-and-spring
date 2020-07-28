import React from 'react';
import { Divider, Menu } from 'semantic-ui-react';
import './SideBar.scss';
import { SideBarHeader } from './SideBarHeader/SideBarHeader';
import SideBarItem from './SideBarItem/SideBarItem';

export class SideBar extends React.Component {
    render() {
        return(
            <Menu borderless vertical stackable fixed='left' className='side-nav'>
                <SideBarHeader title='Package'/>
                <SideBarItem path='/mappings' label='Packages' icon='history'/>
                <SideBarItem path='/packages-mappings' label='Package Mapping' icon='clock'/>
                <SideBarItem path='/packages-other-mappings' label='Package Other Mapping' icon='thumbs up'/>
                <Divider/>
                <SideBarHeader title='FrameWork'/>
                <SideBarItem path='/frameworks' label='FrameWorks' icon='history'/>
                <SideBarItem path='/frameworks-mappings' label='FrameWork Mappings' icon='clock'/>
                <SideBarItem path='/frameworks-package-mappings' label='FrameWork Package Mapping' icon='thumbs up'/>
                <Divider/>
                <SideBarHeader title='Application'/>
                <SideBarItem path='/applications' label='Applications' icon='history'/>
                <SideBarItem path='/applications-package-mappings' label='Application Packages' icon='clock'/>
                <SideBarItem path='/application-framework-mappings' label='Application FrameWorks' icon='thumbs up'/>
                <Divider/>
            </Menu>
        );
    }
}