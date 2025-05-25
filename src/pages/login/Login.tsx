import React, { useContext, useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from './Login.module.css';

import tree from '../../assets/tree.jpg';
import logo from '../../assets/logo.svg';

import { SessionContext } from "../../routes/router.routes";

import isEmailValid from "../../@utils/validation/isEmailValid";
import isPasswordValid from "../../@utils/validation/isPasswordValid";

import InputText from "../../components/Inputs/InputText/InputText";
import InputPassword from "../../components/Inputs/InputPassword/InputPassword";

function Login():JSX.Element {

    const navigate = useNavigate()
    let { login } = useContext(SessionContext);

    const [ emailValue, setEmailValue ] = React.useState<string>('');
    const [ passwordValue, setPasswordValue ] = React.useState<string>('');
    const [ errorEmail, setErrorEmail ] = React.useState<boolean>(false);
    const [ errorPassword, setErrorPassword ] = React.useState<boolean>(false);
    const [ errorLogin, setErrorLogin ] = React.useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(false);

    const handleLogin = useCallback(() => {
        login();
        navigate('/home');
    }, [login, navigate]);

    function handlerSubmit(e: any){
        e.preventDefault();
        if (emailValue === 'admin@admin.com' && passwordValue === 'Admin123*') {
            setErrorLogin(false);
            handleLogin();
        } else {
            setErrorLogin(true);
        }
    }

    function validateEmail() {
        if (isEmailValid(emailValue)) {
            setErrorEmail(false);
        } else {
            setErrorEmail(true);
        }
    }

    function validatePassword() {
        if (isPasswordValid(passwordValue)) {
            setErrorPassword(false);
        } else {
            setErrorPassword(true);
        }
    }

    useEffect(() => {   
        if (!isEmailValid(emailValue) || !isPasswordValid(passwordValue)) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [emailValue, passwordValue]);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated) {
            handleLogin();
        }
    }, [handleLogin]);

    return (
        <div className={styles.container}>
            <div className={styles.divImage}>
                <img src={tree} alt="árvore" className={styles.imageTree} />
            </div>
            <div className={styles.divLogin}>
                <img src={logo} alt="logo" className={styles.logo}/>
                <form className={styles.form}>
                    <InputText 
                        label="Email"
                        htmlFor="email"
                        placeholder={errorEmail ? 'Por favor, insira um e-mail válido!' : ''}
                        className={`${!errorEmail ? '' : styles.inputError}`}
                        onChange={(e) => setEmailValue(e.target.value)}
                        onBlur={validateEmail}
                    />
                    <InputPassword 
                        label="Senha"
                        htmlFor="password"
                        placeholder={errorPassword ? 'Por favor, insira uma senha válida!' : ''}
                        className={`${!errorPassword ? '' : styles.inputError}`}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        onBlur={validatePassword}
                    />
                    <div className={styles.divButton}>
                        <button
                            type="submit"
                            onClick={handlerSubmit}
                            className={`${styles.button} ${buttonDisabled ? styles.buttonActive : styles.buttonDesactive}`}                            disabled={!buttonDisabled}
                        >
                            Login
                        </button>
                        {!errorLogin ? (
                            <></>
                        ) : (
                            <div className={styles.divError}>
                                <span className={styles.error}>Email e/ou senha inválidos</span>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;