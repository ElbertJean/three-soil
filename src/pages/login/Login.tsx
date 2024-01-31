import React, { useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import styles from './Login.module.css';

import tree from '../../assets/tree.jpg';
import logo from '../../assets/logo.svg';

import { SessionContext } from "../../routes/router.routes";


function Login():JSX.Element {

    const navigate = useNavigate()
    const { login } = useContext(SessionContext);

    const [ emailValue, setEmailValue ] = React.useState<string>('');
    const [ passwordValue, setPasswordValue ] = React.useState<string>('');
    const [ error, setError ] = React.useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(false);

    const handleLogin = useCallback(() => {
        login();
        navigate('/home');
    }, [login, navigate]);

    function handlerSubmit(e: any){
        e.preventDefault();
        if (emailValue.length === 0 && passwordValue.length === 0) return
        if (emailValue === 'admin@admin.com' && passwordValue === 'admin123') {
            setError(false);
            handleLogin();
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

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated) {
            handleLogin();
        }
    }, [handleLogin]);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.divItems}>
                    <div className={styles.divImage}>
                        <img src={tree} alt="árvore" className={styles.imageTree} />
                    </div>
                    <div className={styles.divLogin}>
                        <div className={styles.divLogo}>
                            <img src={logo} alt="logo" className={styles.logo}/>
                        </div>
                        <form className={styles.form}>
                            <div className={styles.divInput}>
                                <label htmlFor="email">Email</label>
                                <input type="email" onChange={(e) => setEmailValue(e.target.value)}/>
                            </div>
                            <div className={styles.divInput}>
                                <label htmlFor="password">Senha</label>
                                <input type="password" onChange={(e) => setPasswordValue(e.target.value)}/>
                            </div>
                            {!error ? (
                                <></>
                            ): (
                                <p className={styles.error}>Email e/ou senha inválidos</p>
                            )}
                            {buttonDisabled ? (
                                <div className={styles.divButton}>
                                    <button className={styles.buttonActive} type="submit" onClick={handlerSubmit}>Login</button>
                                </div>
                            ):(
                                <div className={styles.divButton}>
                                    <button className={styles.buttonDesactive} disabled type="submit" onClick={handlerSubmit}>Login</button>
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