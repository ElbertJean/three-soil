import React, { useEffect } from "react";
import './Login.css';

import { useNavigate } from "react-router-dom";

import tree from '../../assets/tree.jpg';
import logo from '../../assets/logo.svg';


function Login():JSX.Element {

    const navigate = useNavigate()

    const [ emailValue, setEmailValue ] = React.useState<string>('');
    const [ passwordValue, setPasswordValue ] = React.useState<string>('');
    const [ error, setError ] = React.useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(false);

    function handlerSubmit(e: any){
        e.preventDefault();
        if (emailValue.length === 0 && passwordValue.length === 0) return
        if (emailValue === 'admin@admin.com' && passwordValue === 'admin123') {
            setError(false);
            navigate('/home');
        } else {
            setError(true);
        }
    }

    useEffect(() => {   
        if (emailValue.length === 0 || passwordValue.length === 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [emailValue, passwordValue])

    return (
        <div className="container">
            <div className="card">
                <div className="divItems">
                    <div className="divImage">
                        <img src={tree} alt="árvore" className="imageTree" />
                    </div>
                    <div className="divLogin">
                        <div className="divLogo">
                            <img src={logo} alt="logo" className="logo"/>
                        </div>
                        <form className="form">
                            <div className="divInput">
                                <label htmlFor="email">Email</label>
                                <input type="email" onChange={(e) => setEmailValue(e.target.value)}/>
                            </div>
                            <div className="divInput">
                                <label htmlFor="password">Senha</label>
                                <input type="password" onChange={(e) => setPasswordValue(e.target.value)}/>
                            </div>
                            {!error ? (
                                <></>
                            ): (
                                <p className="error">Email e/ou senha inválidos</p>
                            )}
                            {buttonDisabled ? (
                                <div className="divButton">
                                    <button className="buttonActive" type="submit" onClick={handlerSubmit}>Login</button>
                                </div>
                            ):(
                                <div className="divButton">
                                    <button className="buttonDesactive" disabled type="submit" onClick={handlerSubmit}>Login</button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;