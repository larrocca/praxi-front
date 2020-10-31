import React, { useState } from 'react';
import './ModelPricePage.scss';
import UserStatusStars from '../../components/UserStatus/UserStatusStarsInfo/UserStatusStars/UserStatusStars';
import UserStatus from '../../components/UserStatus/UserStatus';
import ModelPriceConfigSize from '../../components/ModelPriceConfigSize/ModelPriceConfigSize';
import InputLabel from '@material-ui/core/InputLabel';
import { CirclePicker } from 'react-color';
import MenuItem from '@material-ui/core/MenuItem';
import MODEL_COLORS from '../../utils/constants/colors';
import FormControl from '@material-ui/core/FormControl';
import ShelfModelItem from '../../components/ShelfModelItem/ShelfModelItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Comments from '../../components/Comments/Comments';

const ModelPricePage = () => {

    const [userConfig, setUserConfig] = useState({ colorType: 'comunes', modelColor: null, hardness: 'liviano', postProcess: false, quantity: '0' });

    const getColors = () => {
        return MODEL_COLORS[userConfig.colorType]
    }

    const handleColorChange = (color) => {
        setUserConfig({ ...userConfig, modelColor: color.hex });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserConfig({ ...userConfig, [name]: value })
    }

    return (
        <div className="ModelPriceContainer">
            <div className="ModelPriceImageConfigContainer">
                <div className="ModelPriceImage">
                    <div className="ModelPriceImagePrincipalImg">
                    </div>
                    <div className="ModelPriceImageCarrouselContainer">
                        <div className="ModelPriceImageCarrouselItem">                            
                        </div>
                        <div className="ModelPriceImageCarrouselItem">                            
                        </div>
                        <div className="ModelPriceImageCarrouselItem">                            
                        </div>
                    </div>
                    <div className="ModelPriceUserProfile">
                        <div className="ModelPriceUserProfileTitle">Acerca de @MakerName</div>
                        <div className="ModelPriceUserProfileStatus">
                            <UserStatus showComments="true"/>
                        </div>
                    </div>
                </div>
                <div className="ModelPriceConfig">
                    <div className="ModelPriceConfigTitle">Octopus</div>
                    <div className="ModelPriceConfigRate">
                        <UserStatusStars value="4" />
                        5 Impresiones
                    </div>                    
                    <div className="ModelPriceConfigItemContainer">
                        <div className="ModelPriceConfigItemTitle">Tamaños</div>
                        <div className="ModelPriceConfigSizesItemsContaines">
                            <ModelPriceConfigSize x="22" y="33" z="10" />
                            <ModelPriceConfigSize x="22" y="33" z="10" />
                            <ModelPriceConfigSize x="22" y="33" z="10" />
                        </div>
                    </div>
                    <div className="ModelPriceConfigItemContainer">
                        <div className="ModelPriceConfigItemTitle">Colores</div>
                        <div className="ModelPriceConfigColorsContaines">
                            <FormControl variant="outlined" className="modelConfigSelector">
                                <InputLabel>Tipo de colores</InputLabel>
                                <Select onChange={handleInputChange} value={userConfig.colorType} label="Tipo de colores" name='colorType'>
                                    <MenuItem value={'comunes'}>Comunes</MenuItem>
                                    <MenuItem value={'metalizados'}>Metalizados</MenuItem>
                                    <MenuItem value={'traslucido'}>Traslucido</MenuItem>
                                    <MenuItem value={'fluorscente'}>Fluorscente</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="colorPickerContainer">
                                <CirclePicker width="100%" className="colorPicker" colors={getColors()} onChange={handleColorChange} />
                            </div>
                        </div>
                    </div>
                    <div className="ModelPriceConfigQuantity">
                        <TextField type="number" value="1" className="ModelPriceConfigQuantityInput" id="quantity" label="Cantidad" variant="outlined" />
                    </div>
                    <div className="ModelPriceConfigPrice">
                        $500
                    </div>
                    <div className="ModelPriceConfigPrintButton">IMPRIMIR</div>
                    <div className="ModelPriceConfigAddCartButton">AGREGAR AL CARRITO</div>
                </div>
            </div>
            <div className="ModelPriceDescriptionContainer">                
                <div className="ModelPriceDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit e
                </div>
                <Comments />                
            </div>            
            <div className="ModelPriceRecommendedModels">
                <ShelfModelItem />
                <ShelfModelItem />
                <ShelfModelItem />
                <ShelfModelItem />
                <ShelfModelItem />
                <ShelfModelItem />
                <ShelfModelItem />
                <ShelfModelItem />
            </div>
        </div>
    );
};

export default ModelPricePage;
