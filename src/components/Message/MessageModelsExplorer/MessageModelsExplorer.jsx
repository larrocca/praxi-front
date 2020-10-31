import React from 'react';
import './MessageModelsExplorer.scss';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const MessageModelsExplorer = () => {
	return (
		<div className="modelsExplorerContainer">
			<div className="title">
				<p>Agregá un modelo de tu Shelf al chat</p>
			</div>			
			<div className="selector">
				<FormControl variant="outlined">
					<InputLabel id="modelSelect">Shelf</InputLabel>
					<Select
						labelId="modelSelect"
						value={'test'}
						/*onChange={handleChange}*/
						label="Shelf"
						className="explorerSelect"
					>
						<MenuItem value="test">
							<em>Todas</em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
					</Select>
				</FormControl>
				<FormControl variant="outlined">
					<InputLabel id="modelSelect">Categorías</InputLabel>
					<Select
						labelId="modelSelect"
						value={10}
						/*onChange={handleChange}*/
						label="Categorías"
						className="explorerSelect"
					>
						<MenuItem value="test">
							<em>Todas</em>
						</MenuItem>
						<MenuItem value={10}>Animales</MenuItem>
					</Select>
				</FormControl>
			</div>			
            <div className="models">            
            </div>
		</div>
	);
};

export default MessageModelsExplorer;
