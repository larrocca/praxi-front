import React from 'react';
import './ShelfModelItemControl.scss';

const ShelfModelItemControl = (props) => {
    
    return (
        <div style={{backgroundColor: props.color}}className="ShelfModelItemControl">
            {props.icon}
        </div>
    )

}

export default ShelfModelItemControl;
