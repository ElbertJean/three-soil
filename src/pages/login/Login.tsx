import React, { useEffect } from "react";
import styles from './Login.module.css';

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