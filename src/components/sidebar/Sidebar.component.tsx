import { useContext } from "react";

import styles from './Sidebar.module.css';
import iconeUsuario from '../../assets/iconeUsuario.svg';
import iconMap from '../../assets/iconMap.svg';
import logout from '../../assets/logout.svg';
import buttonCollapsed from '../../assets/buttonCollapsed.svg';
import buttonExpanded from '../../assets/buttonExpanded.svg';

import { SessionContext } from "../../routes/router.routes";

function Sidebar(): JSX.Element {

    const { logout: handleLogout, isCollapsed, collapsedSideBar } = useContext(SessionContext);
    console.log(isCollapsed);

    return(
        <div className={`${isCollapsed ? styles.containerCollapsed : styles.containerExpanded}`} >
            <div className={`${isCollapsed ? styles.divUserCollapsed : styles.divUserExpanded}`}>
                <div className={styles.divButtonClose}>
                    <a href="/home" onClick={collapsedSideBar}>
                        <img src={isCollapsed ? buttonExpanded : buttonCollapsed} alt="fechar menu lateral" className={styles.buttonClose}/>
                    </a>
                </div>
                <div>
                    <img src={iconeUsuario} alt="icone do usuário" className={`${isCollapsed ?styles.iconUserCollapsed : styles.iconUserExpanded}`}/>
                </div>
                <div className={`${isCollapsed ? styles.divTextUserCollapsed : ''}`}>
                    <p>Elbert Jean</p>
                    <hr className={styles.lineUser}/>
                    <p>admin@admin.com</p>
                </div>
            </div>
            <div className={`${isCollapsed ? styles.divLineCollapsed : styles.divLineExpanded}`}>
                <hr className={styles.line}/>
            </div>
            <div>
                <a href="/home" className={`${isCollapsed ? styles.bodyCollapsed : styles.bodyExpanded}`}>
                    <div>
                        <img src={iconMap} alt="icone do mapa" className={`${isCollapsed ? styles.iconMapCollapsed : styles.iconMapExpanded}`}/>
                    </div>
                    <div className={`${isCollapsed ? styles.paragraphCollapsed : ''}`}>
                        <p className={styles.paragraphMap}>Visualizar áreas</p>
                    </div>
                </a>
            </div>
            <div className={`${isCollapsed ? styles.divButtonLoggoutCollapsed : styles.divButtonLoggoutExpanded}`}>
                <button className={`${isCollapsed ? styles.buttonLoggoutCollapsed : styles.buttonLoggoutExpanded}`} onClick={() => handleLogout()}>
                    <img src={logout} alt="botao" className={`${isCollapsed ? styles.iconMapButtonCollapsed : styles.iconMapButtonExpanded}`}/>
                    {isCollapsed ? "" : "Sair"}
                </button>
            </div>
        </div>
    )
}

export default Sidebar;