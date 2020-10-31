import React from 'react';
import './ShelfModelItem.scss';
import ShelfModelItemControl from '../ShelfModelItem/ShelfModelItemControl/ShelfModelItemControl';
import { ReactComponent as EditIcon } from '../../assets/ProfilePage/ShelfItem/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/ProfilePage/ShelfItem/delete.svg';
import UserStatusStars from '../UserStatus/UserStatusStarsInfo/UserStatusStars/UserStatusStars';

const ShelfModelItem = (props) => {
    
    return (
        <div className="shelfModelItem" onClick={console.log("asdasda")}>
            <div className="shelfModelItemControlsContainer">
                <div className="shelfModelItemControls">
                    <ShelfModelItemControl color="#E53935" icon={<DeleteIcon />} />
                    <ShelfModelItemControl color="#5e35b1" icon={<EditIcon />} />
                </div>
                <div className="shelfModelItemInfo">
                    <div className="shelfModelItemInfoTitle">{props.title}</div>
                    <div className="shelfModelItemInfoPrice">${props.price}</div>
                    <UserStatusStars value="5" />
                </div>
            </div>
        </div>
    )

}

export default ShelfModelItem;
