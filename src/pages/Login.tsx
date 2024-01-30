import React from "react";
import './Login.css';

import tree from '../assets/tree.jpg';
import logo from '../assets/logo.svg';

function Login():JSX.Element {

    const [ emailValue, setEmailValue ] = React.useState(String);
    const [ passwordValue, setPasswordValue ] = React.useState(String);
    // const [ error, setError ] = React.useState(Boolean);

    // const teste(e) {
    //     e.preventDefault();
    //     if (emailValue === 'elbertjean@gmail.com' && passwordValue === '123456') {
    //         setError(false);
    //     } else {
    //         setError(true);
    //     }
    // }

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
                                <label htmlFor="email">Senha</label>
                                <input type="email" onChange={(e) => setPasswordValue(e.target.value)}/>
                            </div>
                            <div className="divButton">
                                <button type="submit">Entrar</button>
                            </div>
                        </form>
                        <p>{emailValue}</p>
                        <p>{passwordValue}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;