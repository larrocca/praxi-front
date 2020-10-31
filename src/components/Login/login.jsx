import React from 'react';
import "./Login.scss";
import { ReactComponent as Separator } from '../../assets/Login/svg-separator.svg';

export function validate(input) {
    let errors = {};
    if (!input.username) {
        errors.username = 'Email requerido';
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
        errors.username = 'Email invalido';
    }
    if (!input.password) {
        errors.password = 'Contraseña requerida';
    } else if (!/(?=.*[0-9])/.test(input.password)) {
        errors.password = 'Contraseña invalida';
    }

    return errors;
};

export default function Login() {
    const [input, setInput] = React.useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({});

    const handleOnchange = function (e) {
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = function (e) {
        e.preventDefault();
    }

    return (
        <div className="background">
            <div className="login">
                <div className="blue">
                    <div className="sesion">Iniciar Sesión</div>
                    <form className="form" onSubmit={handleSubmit}>
                        <input className="google" type="submit" value="Iniciar con Google" />

                        <div className="separator">
                            <Separator  />
                        </div>

                        <div className="inputConf">
                            <input className={`email ${errors.username && 'danger'}`} type="text" name="username" value={input.username} onChange={handleOnchange} placeholder="Email" />

                            <input className={`password ${errors.password && 'danger'}`} type="password" name="password" value={input.password} onChange={handleOnchange} placeholder="Contraseña" />
                            <input className="sucess" type="submit" value="INICIAR SESIÓN"/>
                        </div>

                    </form>
                    
                </div>
                <div className="bot">No tenes cuenta?-<a>Registrate</a> </div>
            </div>
        </div>

    )
}