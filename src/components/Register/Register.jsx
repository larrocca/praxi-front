import React, {useState} from 'react';
import './Register.scss';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';


const Register = () => {
    //useState definition
    const [userInfo , setUserInfo] = useState({username:"",email:"",name:"",lastname:"",password:"", passwordConfirm:""})
    const [formError , setChangeToError] = useState(false)
    const [formErrorPass , setChangeToErrorPass] = useState(false)
    const [formErrorPassConfirm , setChangeToErrorPassConfirm] = useState(false)
    //metods
    const handleChange = (event) =>{
        //console.log(event.target.value) //Esto hace que este pendiente del value del target
        setUserInfo({
            ...userInfo, //Los tres puntos hacen una copia de datos, para no eliminar los atributos, trabaja con uno nuevo
            [event.target.name] : event.target.value
        }) 
    }

    const sendForm = (event) =>{
        event.preventDefault();
            if(userInfo.username.length < 4){
                event.preventDefault();
                setChangeToError(true);
                }
            if(userInfo.password.length < 4){
                event.preventDefault();
                setChangeToErrorPass(true)
                }
            if(userInfo.passwordConfirm != userInfo.password){
                event.preventDefault();
                setChangeToErrorPassConfirm(true)
            }
        console.log(userInfo.name + ' ' + userInfo.password + ' ' + userInfo.username + ' ' + userInfo.passwordConfirm)
        console.log(formError)
    }

    return (
        <div className="registerContainer">
            <h2>Registrate</h2>
            <div className="borderContainer">
                <div className="textFieldContainer">
                    <form className="{classes.root} formTextField" noValidate autoComplete="off">
                        <div className="firstTextFieldPanel">
                            <TextField className="textField" error={formError} helperText={formError === true ? "Debe tener mas de 4 caracteristicas y menos de 12" : null } id="standard-basic" label="Usuario" name="username" onChange={handleChange} />
                            <TextField className="textField" id="standard-basic" label="Email" name="email" onChange={handleChange} />
                        </div>
                        <div className="firstTextFieldPanel">
                            <TextField className="textField" id="standard-basic" label="Nombre" name="name" onChange={handleChange}/>
                            <TextField className="textField" id="standard-basic" label="Apellido" name="lastname" onChange={handleChange} />
                        </div>
                        <div className="firstTextFieldPanel">
                            <TextField className="textField" error={formErrorPass} helperText={formErrorPass === true ? "Debe tener mas de 4 caracteristicas y menos de 12 " : null} type="password" id="standard-basic" label="Contraseña" name="password" onChange={handleChange} />
                            <TextField className="textField" error={formErrorPassConfirm} helperText={formErrorPassConfirm === true ? "Las contraseñas no coinciden" : null} type="password" id="standard-basic" label="Repetir contraseña" name="passwordConfirm" onChange={handleChange} />
                        </div>
                    </form>
                </div>
                <p>Selecciona al menos dos caratcteristicas que sean de tu interes</p>
                <div className="chipFieldContainer">
                    <Chip className="chip"
                            label="Anime"
                            clickable
                        />
                    <Chip className="chip"
                        label="Metalurgica"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Metalurgica"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Metalurgica"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Calzado"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Automotor"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Arte"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Animacion"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Protesis"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Mecanica"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Robotica"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Manualidades"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Comics"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Computacion"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Diseño"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Herramientas"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Anime"
                        clickable
                    />
                    <Chip className="chip"
                        label="Metalurgica"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Metalurgica"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Metalurgica"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Calzado"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Automotor"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Arte"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Animacion"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Protesis"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Mecanica"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Robotica"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Manualidades"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Comics"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Computacion"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Diseño"
                        clickable
                        color="primary"
                    />
                    <Chip className="chip"
                        label="Herramientas"
                        clickable
                        color="primary"
                    />
                </div>
            </div>
            <div className="buttonContainer">
                <Button className="buttonProps" variant="contained" color="primary" onClick={sendForm}>
                    Continuar
                </Button>
                <div className="textRegister">
                    <p>Al registrarme declaro que soy mayor de edad y acepto los terminos y condiciones
                    y las politicas de privacidad de Rush y Praxi
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Register;