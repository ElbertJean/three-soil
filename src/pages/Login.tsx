import React from "react";
import './Login.css';

import tree from '../assets/tree.jpg';
import logo from '../assets/logo.svg';

function Login():JSX.Element {
    return (
        <div className="container">
            <div className="card">
                <div className="div">
                    <div className="divisao">
                        <img src={tree} alt="árvore" className="arvore" />
                    </div>
                    <div className="divisao2">
                        <div style={{textAlign:'center', paddingTop:'60px'}}>
                            <img src={logo} alt="logo" className="logo"/>
                        </div>
                        <form className="form">
                            <div className="divInput">
                                <label htmlFor="email">Email</label>
                                <input type="email" />
                            </div>
                            <div className="divInput">
                                <label htmlFor="email">Senha</label>
                                <input type="email" />
                            </div>
                            <div className="divButton">
                                <button type="submit">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;