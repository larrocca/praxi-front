import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './OptionReg.scss';
import { ReactComponent as Separator } from '../../assets/Common/Separador.svg';
import Register from '../../components/Register/Register';


class OptionReg extends Component {

    state = {
        contador: 0
    }

    //metods
    sendToRegister() {
        this.setState({
            contador: (this.state.contador + 1)
        });
    };

    mostrar() {
        console.log(this.state.contador)
    }
    render() {
        return (
            <div className="optionRegContainer">
                {this.state.contador == 0 ? (
                    <div className="conditionalContainer">
                        <div>
                            <h2>¿Necesitas que tus ideas sean tangibles?</h2>
                            <p>
                                Ese modelo 3D que te gusto, ese diseño que con tanto amor realizaste o esa pieza/repuesto que necesitas
                                con urgencia pero no conseguis por ninguna parte puede ser impresa o diseñada por uno de nuestros markers.
                                Todo lo que te imagines podes encontrarlo aca, en Praxi, donde no hay limites para la imaginacion
                            </p>
                            <div className="divButton">
                                <Button className="buttonProps" variant="contained" color="primary" onClick={this.sendToRegister.bind(this)} >
                                    REGISTRARME
                                </Button>
                            </div>
                        </div>
                        <Separator className="separatorProps" />
                        <div>
                            <h2>Monetiza tu talento</h2>
                            <p>
                                Si, podes generar ingresos con tu hobbie imprimiendo modelos 3D o diseñandolos gracias a Praxi. No seas
                                egoista, mucha gente te necesita! Sumate a Praxi! Miles de personas desean cosas a las cuales no tienen los
                                medios para acceder, gracias a vos nadie todo seria posible.
                            </p>
                            <div className="divButton">
                                <Button className="buttonProps" variant="contained" color="secondary" onClick={this.mostrar.bind(this)}>
                                    REGISTRARME COMO MAKER
                                </Button>
                            </div>
                        </div>
                    </div>
                 ):(
                     <div className="registerContainer">
                        <Register />
                     </div>
                     )
                 }
            </div>
        );
    }
}

export default OptionReg;