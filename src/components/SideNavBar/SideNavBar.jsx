import React from 'react';
import './SideNavBar.scss';
import { ReactComponent as UserProfile } from '../../assets/MainPage/SideNavBar/user_profile.svg';
import { ReactComponent as UserSettings } from '../../assets/MainPage/SideNavBar/user_settings.svg';
import { ReactComponent as Work } from '../../assets/MainPage/SideNavBar/work.svg';
import { ReactComponent as Chats } from '../../assets/MainPage/SideNavBar/chats.svg';
import { ReactComponent as Home } from '../../assets/MainPage/SideNavBar/home.svg';
import SideNavBarElement from './SideNavBarElement/SideNavBarElement'; 

const SideNavBar = () => {
    
    return (
        <div className="mainSideNavBar">            
            <div className="sideBarControlsContainer border-bottom-line">                
                <SideNavBarElement element={<UserProfile/>} />
            </div>
            <div className="sideBarControlsContainer border-top-line border-bottom-line">
                <SideNavBarElement onHandleClick={console.log("Home")} element={<Home/>} />
                <SideNavBarElement element={<Work/>} />
                <SideNavBarElement element={<Chats/>} />          
            </div>
            <div className="sideBarControlsContainer border-top-line">
                <SideNavBarElement element={<UserSettings/>} />
            </div>
        </div>
    )

}

export default SideNavBar;
