import React from "react";
import './Login.css';

import tree from '../assets/tree.jpg';
import logo from '../assets/logo.svg';

function Login():JSX.Element {

    const [ emailValue, setEmailValue ] = React.useState<string>('');
    const [ passwordValue, setPasswordValue ] = React.useState<string>('');
    const [ error, setError ] = React.useState<boolean>(false);

    function handlerSubmit(e: any){
        e.preventDefault();
        if (emailValue.length === 0 || passwordValue.length === 0) return;
        if (emailValue === 'admin@threesoil.com' && passwordValue === 'admin123') {
            setError(false);
        } else {
            setError(true);
        }
    }

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
                            <div className="divButton">
                                <button type="submit" onClick={handlerSubmit}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;