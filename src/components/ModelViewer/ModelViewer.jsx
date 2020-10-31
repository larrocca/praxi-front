import React, { useEffect, useState } from 'react';
import './ModelViewer.scss';
import { useViewer } from './ModelViewerConfig.js';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ColorLensIcon from '@material-ui/icons/ColorLens';

const ModelViewer = ({ file, userConfig }) => {
	const [ binds, { load, userSettings } ] = useViewer();

	useEffect(
		() => {
			load(file);
		},
		[ file ]
	);
	
	if(userConfig.modelColor) {
	userSettings(userConfig.modelColor);
	}
	
	return (
		<div className="modelViewerContainer">
			<canvas className="modelCanvas" ref={binds} />
		</div>
	);
};

export default ModelViewer;
