import React, { useContext, useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from './Login.module.css';

import tree from '../../assets/tree.jpg';
import logo from '../../assets/logo.svg';

import { SessionContext } from "../../routes/router.routes";

import isEmailValid from "../../@utils/validation/isEmailValid";
import isPasswordValid from "../../@utils/validation/isPasswordValid";

import quest from '../../assets/quest.svg'

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

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnterHelp = () => {
        setIsHovering(true);
    };
  
    const handleMouseLeaveHelp = () => {
        setIsHovering(false);
    };
  

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
                                <label className={styles.label} htmlFor="email">Email</label>
                                <input 
                                    className={`${styles.input} ${!errorEmail ? styles.input : styles.inputError}`} 
                                    type="email"
                                    onChange={(e) => setEmailValue(e.target.value)}
                                    onBlur={validateEmail}
                                    placeholder={errorEmail ? 'Por favor, insira um e-mail válido!' : ''}
                                />
                            </div>
                            <div className={styles.divInput}>
                                <div className={styles.containerPassword}>
                                    <label className={styles.label} htmlFor="password">Senha</label>
                                    <img src={quest} alt="lup" className={styles.iconQuest} onMouseEnter={handleMouseEnterHelp} onMouseLeave={handleMouseLeaveHelp}/>
                                    {isHovering && (
                                        <div className={styles.divPopupHover}>
                                            <div className={styles.popupHover}>
                                                <p className={styles.modalParagraph}>8 caracteres no mínimo</p>
                                                <p className={styles.modalParagraph}>1 letra maiúscula</p>
                                                <p className={styles.modalParagraph}>1 letra minúscula</p>
                                                <p className={styles.modalParagraph}>1 número</p>
                                                <p className={styles.modalParagraph}>1 caractere especial</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <input 
                                    className={`${styles.input} ${!errorPassword ? styles.input : styles.inputError}`} 
                                    type="password" 
                                    onChange={(e) => setPasswordValue(e.target.value)}
                                    onBlur={validatePassword}
                                    placeholder={errorPassword ? 'Por favor, insira uma senha válida!' : ''}
                                />
                            </div>
                            {!errorLogin ? (
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