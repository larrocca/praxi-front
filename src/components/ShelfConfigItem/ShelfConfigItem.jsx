import React from 'react';
import './ShelfConfigItem.scss';

const ShelfConfigItem = (props) => {
    
    return (
        <div className="shelfConfigItem">
            <div className="shelfActionIcon">
                {props.icon}
            </div>
            <div className="shelfActionTitle">
                {props.title}
            </div>
        </div>
    )

}

export default ShelfConfigItem;
