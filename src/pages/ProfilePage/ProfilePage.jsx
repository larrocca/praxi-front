import React, {useState, useCallback, useEffect} from 'react';
import { ReactComponent as AddIcon } from '../../assets/ProfilePage/ShelfItem/add.svg';
import { ReactComponent as EditIcon } from '../../assets/ProfilePage/ShelfItem/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/ProfilePage/ShelfItem/delete.svg';
import { ReactComponent as PackIcon } from '../../assets/ProfilePage/ShelfItem/pack.svg';
import { ReactComponent as OctopusLogo } from '../../assets/LandingPage/svg-octopus.svg';
import './ProfilePage.scss';
import ShelfConfigItem from '../../components/ShelfConfigItem/ShelfConfigItem';
import ShelfModelItem from '../../components/ShelfModelItem/ShelfModelItem';
import UserStatus from '../../components/UserStatus/UserStatus';

const ProfilePage = () => {

    useEffect(() => {        
        document.title = "McDonnalds";
    });
    
    return (
        <div className="profilePageContainer">
            <div className="profileMainContainer">
                <div className="profileHeaderContainer">
                    <div className="profileHeaderCover"></div>
                    <div className="profileHeaderShelfbar">
                        <div className="shelfBarItem">Ingenieria</div>
                        <div className="shelfBarItem">Ingenieria</div>
                        <div className="shelfBarItem">Ingenieria</div>
                        <div className="shelfBarItem">Ingenieria</div>
                        <div className="shelfBarItem">Ingenieria</div>                   
                    </div>
                    <div className="prifileHeaderProfile"></div>
                </div>
                <div className="profileBody">
                    <div className="profileStatusContainer">
                        <UserStatus showComments="true"/>
                    </div>
                    <div className="shelfConfigContainer">
                        <ShelfConfigItem icon={<AddIcon/>} title="Agregar a este shelf" />
                        <ShelfConfigItem icon={<PackIcon/>} title="Crear un nuevo pack" />
                        <ShelfConfigItem icon={<EditIcon/>} title="Editar este shelf" />                        
                        <ShelfConfigItem icon={<DeleteIcon/>} title="Eliminar este shelf" />
                    </div>
                    <div className="shelfModelListContainer">
                        <ShelfModelItem imgUrl="" title="Octopus" price="500"/>
                        <ShelfModelItem imgUrl="" title="Octopus" price="500"/>
                        <ShelfModelItem imgUrl="" title="Octopus" price="500"/>
                        <ShelfModelItem imgUrl="" title="Octopus" price="500"/>
                        <ShelfModelItem imgUrl="" title="Octopus" price="500"/>
                        <ShelfModelItem imgUrl="" title="Octopus" price="500"/>
                        <ShelfModelItem imgUrl="" title="Octopus" price="500"/>
                        <ShelfModelItem imgUrl="" title="Octopus" price="500"/>
                        <ShelfModelItem imgUrl="" title="Octopus" price="500"/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProfilePage;
