import { useNavigate } from "react-router-dom";

import styles from './Sidebar.module.css';
import iconeUsuario from '../../assets/iconeUsuario.svg';
import iconMap from '../../assets/iconMap.svg';
import logout from '../../assets/logout.svg';
import buttonClose from '../../assets/buttonClose.svg';

function Sidebar(): JSX.Element {

    const navigate = useNavigate();

    return(
        <>
        <div>

        </div>
        <div className={styles.container}>
            <div className={styles.divUser}>
                <div className={styles.divButtonClose}>
                    <a href="/home">
                        <img src={buttonClose} alt="fechar menu lateral" className={styles.buttonClose}/>
                    </a>
                </div>
                <div className={styles.divIconUser}>
                    <img src={iconeUsuario} alt="icone do usuário" className={styles.iconUser}/>
                </div>
                <div className={styles.divTextUser}>
                    <p>Elbert Jean</p>
                    <hr className={styles.lineUser}/>
                    <p>admin@admin.com</p>
                </div>
            </div>
            <div style={{padding:'0px 20px'}}>
                <hr className={styles.line}/>
            </div>
            <a href="/home" className={styles.body} onClick={()=> alert('Esse alerta posso fazer')}>
                <div>
                    <img src={iconMap} alt="icone do mapa" className={styles.iconMap}/>
                </div>
                <div>
                    <p className={styles.paragraphMap}>Visualizar áreas</p>
                </div>
            </a>
            <div className={styles.divButtonLoggout}>
                <button className={styles.buttonLoggout} onClick={() => navigate('/')}>
                    <img src={logout} alt="botao" className={styles.iconMapButton}/>
                    Sair
                </button>
            </div>
        </div>
        </>
    )
}

export default Sidebar;