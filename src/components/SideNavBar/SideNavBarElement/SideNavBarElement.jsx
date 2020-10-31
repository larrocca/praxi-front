import React from 'react';
import './SideNavBarElement.scss';

const SideNavBarElement = ({element}) => {
    
    return (
        <div className="sideBarElementContainer">            
            {element}
        </div>
    )

}

export default SideNavBarElement;
