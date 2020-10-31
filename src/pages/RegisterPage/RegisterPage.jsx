import React from 'react';
import './RegisterPage.scss';
import TextFiles from './TextFiles';
import Img from '../../assets/RegisterPage/happypeople.jpg';
import Register from '../../components/Register/Register';
import OptionReg from '../../components/OptionReg/OptionReg';



const RegisterPage = () => {
    return (
        <div className="RegisterPageContainer">
            <div className="ImgPanel">
                {/*<img src={Img} className="ImgProps" alt="happy"></img>*/}
                <p>Sumate</p>
            </div>
            <div className="FormPanel">
                <OptionReg />
            </div>
        </div>
    )
}

export default RegisterPage;