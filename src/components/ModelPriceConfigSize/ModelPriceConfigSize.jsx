import React from 'react';
import './ModelPriceConfigSize.scss';

const ModelPriceConfigSize = (props) => {
    
    return (
        <div className="ModelPriceConfigSizeContainer">
            <div className="axis">Ancho<div className="size"> {props.x}mm</div></div>
            <div className="axis">Largo<div className="size">{props.y}mm</div></div>
            <div className="axis">Alto<div className="size">{props.z}mm</div></div>
        </div>
    )

}

export default ModelPriceConfigSize;
