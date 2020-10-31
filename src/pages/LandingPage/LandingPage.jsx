import React, { useState, useCallback, useEffect } from 'react';
import './LandingPage.scss';
import { ReactComponent as OctopusLogo } from '../../assets/LandingPage/svg-octopus.svg';
import { ReactComponent as ModelLogo } from '../../assets/LandingPage/svg-quote.svg';
import { ReactComponent as HandShakeLogo } from '../../assets/LandingPage/svg-handshake.svg';
import { ReactComponent as MercadoLibreLogo } from '../../assets/LandingPage/svg-mercado_libre.svg';
import { ReactComponent as TruckLogo } from '../../assets/LandingPage/svg-truck.svg';
import { ReactComponent as FirstTriangle } from '../../assets/LandingPage/svg-first-triangle.svg';
import { ReactComponent as SecondTriangle } from '../../assets/LandingPage/svg-second-triangle.svg';
import { Button, Icon } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { CirclePicker } from 'react-color';
import { useViewer } from '../../components/ModelViewer/ModelViewerConfig';
import MODEL_COLORS from '../../utils/constants/colors';
import ModelViewer from '../../components/ModelViewer/ModelViewer';
import ContactModal from '../../components/ContactModal/ContactModal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';

const LandingPage = () => {
	const [ selectedFile, setFile ] = useState();
	const [ modalOpen, setModalOpen ] = useState(false);
	const [ userConfig, setUserConfig ] = useState( { colorType: 'comunes', modelColor: null, hardness: 'liviano', postProcess: false, quantity: '0' } );
	const [ isConfigValid, setIsConfigValid ] = useState(true);
	const [ fileName, setFileName ] = useState('');
	const [ binds, { clearScene } ] = useViewer();

	useEffect( () => {
		const { modelColor, quantity } = userConfig;

		if(modelColor && quantity > 0){
			setIsConfigValid(false);
		}

	}, [userConfig.modelColor, userConfig.quantity]);

	//On file change
	const handleFileChange = (event) => {
		const fileList = event.target.files;
		const file = fileList[0];
		const fileName = file.name.split('.');

		if (!file || !(fileName[1] === 'stl')) {
			//error message here
			return;
		}

		setFileName(fileName);
		setFile(file);
	};

	//On file drop
	const onDrop = useCallback((file) => {
		if (!file || !(file[0].name.split('.').pop() === 'stl')) {
			//error
			return;
		}

		setFile(file[0]);
	}, []);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		 setUserConfig({...userConfig, [name]: value})
	}

	const removeModelFromState = () => {
		clearScene();
		setFile(null);
	};

	const contactButtonHandle = () => {
		setModalOpen(true);
	};

	const getColors = () => {
		return MODEL_COLORS[userConfig.colorType]
	}

	const handleColorChange = (color) => {
		setUserConfig({...userConfig, modelColor: color.hex});
	}

	const { getRootProps } = useDropzone({ onDrop });

	return (
		<div className="landingPageContainer" {...getRootProps()} /*Drop Zone*/>
			<div className="mainPanel">
				{selectedFile ? (
					<div className="mainPanelModelViewer">
						<div className="modelTitle">
							<p>{fileName[0]}</p>
						</div>
						<div className="modelConfigContainer">
							<div className="modelConfig">
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
									<CirclePicker className="colorPicker" colors={getColors()} onChange={handleColorChange} />
								</div>
								<FormControl variant="outlined" className="modelConfigSelector">
									<InputLabel>Dureza</InputLabel>
									<Select onChange={handleInputChange} value={userConfig.hardness} label="Dureza" name='hardness'>
										<MenuItem value={'liviano'}>Liviano</MenuItem>
										<MenuItem value={'resistente'}>Resistente</MenuItem>
									</Select>
								</FormControl>
								<FormControl variant="outlined" className="modelConfigSelector">
									<InputLabel>Post procesado</InputLabel>
									<Select onChange={handleInputChange} value={userConfig.postProcess} label="Post procesado" name='postProcess'>
										<MenuItem value={false}>No</MenuItem>
										<MenuItem value={true}>Si</MenuItem>
									</Select>
								</FormControl>
								<TextField
									id="outlined-helperText"
									label="Cantidad"
									variant="outlined"
									className='modelConfigTextField'
									onChange={handleInputChange}
									value={userConfig.quantity}
									name='quantity'
								/>
							</div>
						</div>

						<div className="modelInfoContainer">
							<div className="modelInfo">
								<div className='modelCloseIcon' onClick={removeModelFromState}>
									<CloseIcon className='closeIcon'/>
								</div>
								<div className="infoText">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
								</div>
								<Button variant="contained" color="primary" className="infoButton" disabled={isConfigValid}>
									CONTINUAR
								</Button>
							</div>
						</div>

						<ModelViewer file={selectedFile} setFile={setFile} userConfig = {userConfig}/>
					</div>
				) : (
					<div>
						<div className="mainPanelText">
							<p className="mainPanelTitle">Subí y solidifica tus modelos</p>
							<p className="mainPanelSubTitle">
								Arrastra y solta donde quieras tu archivo. Configura la impresión. <br />Cotiza tu
								modelo por mas de 10.000 makers
							</p>
						</div>
						<div className="mainPanelButton">
							<div className="mainPanelButtonInner">
								<input type="file" id="file" className="hide" onChange={handleFileChange} />
								<label htmlFor="file">Cargar un modelo .stl</label>
							</div>
							<div>
								<p className="modelButton">¿NECESITAS UN MODELO?</p>
							</div>
						</div>
						<div className="mainPanelImage">
							<OctopusLogo className="octopusLogo" />
						</div>
					</div>
				)}
			</div>

			<div className="triangleContainer">
				<FirstTriangle className="triangleSvg dark" />
			</div>

			<div className="secondPanel">
				<div className="secondPanelText">
					<p className="secondPanelTitle">¿Cómo funciona?</p>
					<p className="secondPanelSubTitle">¡Muy fácil!</p>
				</div>
			</div>

			<div className="triangleContainer">
				<SecondTriangle className="triangleSvg" />
			</div>

			<div className="thirdPanel">
				<div className="thirdPanelModel">
					<div className="radiusButton">
						<span className="radiusNumber">1</span>
					</div>
					<div className="modelTitleContainer">
						<p className="modelTitle">Cotiza tu modelo</p>
					</div>
					<div className="modelLogoContainer">
						<ModelLogo className="modelLogo" />
					</div>
					<div className="modelTextContainer">
						<p className="modelText">
							¿Necesitas un modelo?<br />Contrata un diseñador
						</p>
					</div>
				</div>
				<div className="thirdPanelModel">
					<div className="radiusButton">
						<span className="radiusNumber">2</span>
					</div>
					<div className="modelTitleContainer">
						<p className="modelTitle">
							Contrata un <br />maker
						</p>
					</div>
					<div className="modelLogoContainer">
						<HandShakeLogo className="modelLogo" />
					</div>
					<div className="modelTextContainer">
						<p className="modelText">Tenemos buena gente</p>
					</div>
				</div>
				<div className="thirdPanelModel">
					<div className="radiusButton">
						<span className="radiusNumber">3</span>
					</div>
					<div className="modelTitleContainer">
						<p className="modelTitle">
							Pagá con <br />Mercado Pago
						</p>
					</div>
					<div className="modelLogoContainer">
						<MercadoLibreLogo className="modelLogo" />
					</div>
					<div className="modelTextContainer">
						<p className="modelText">
							En efectivo, transferencia <br />o tarjeta de crédito/débito.
						</p>
					</div>
				</div>
				<div className="thirdPanelModel">
					<div className="radiusButton">
						<span className="radiusNumber">4</span>
					</div>
					<div className="modelTitleContainer">
						<p className="modelTitle">
							Recibilo en <br />tu casa
						</p>
					</div>
					<div className="modelLogoContainer">
						<TruckLogo className="modelLogo" />
					</div>
					<div className="modelTextContainer">
						<p className="modelText">Así de fácil y comodo</p>
					</div>
				</div>
			</div>

			<div className="fourthPanel">
				<div className="fourthPanelInnerContainer">
					<div>
						<p className="fourthPanelTitle">¿Necesitas un modelo?</p>
					</div>
					<div>
						<p className="fourthPanelSubTitle">
							Contanos que es lo que necesitas.<br />
							Por ejemplo, un objeto ya existente, o desde un plano o dibujo, o simplemente desde cero.<br
							/>
							Contrata al maker que mejor entendió tu idea y ellos te irán mostrando como va quedando<br />tu
							modelo.
						</p>
					</div>
					<div className="fourthPanelButton" onClick={contactButtonHandle}>
						<Button animated="fade">
							<Button.Content visible>CONTANOS TU IDEA</Button.Content>
							<Button.Content hidden>
								<Icon name="pencil" />
							</Button.Content>
						</Button>
					</div>
				</div>
			</div>

			<div className="fifthPanel">
				<div className="fifthPanelInnerContainer">
					<p className="fifthPanelTitle">¿Tenes impresora 3D? ¿Sos modelador 3D? ¿Ambas?</p>
					<p className="fifthPanelSubTitle">
						Monetiza tu talento, mucha gente necesita tu ayuda. Compartí o vende tus diseños
					</p>
					<div className="fifthPanelButton">
						<Button className="fifthPanelButton">SUMATE</Button>
					</div>
				</div>
			</div>

			<div className="footerPanel" />

			<ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
		</div>
	);
};

export default LandingPage;
