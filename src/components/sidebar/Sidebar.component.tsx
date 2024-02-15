import { useState, useContext } from "react";

import styles from './Sidebar.module.css';
import iconeUsuario from '../../assets/iconeUsuario.svg';
import iconMap from '../../assets/iconMap.svg';
import logout from '../../assets/logout.svg';
import buttonCollapsed from '../../assets/buttonCollapsed.svg';
import buttonExpanded from '../../assets/buttonExpanded.svg';

import { SessionContext } from "../../routes/router.routes";

interface IState {
    isCollapsed: boolean;
}

function Sidebar(): JSX.Element {

    const { logout: handleLogout } = useContext(SessionContext);

    const [ state, setState ] = useState<IState>({isCollapsed: false});

    function collapsedSideBar (e: any) {
        e.preventDefault();
        if (state.isCollapsed === true) {
            setState({isCollapsed:  false});
        } else {
            setState({ isCollapsed: true});
        }
    }

    return(
        <div className={`${state.isCollapsed ? styles.containerCollapsed : styles.containerExpanded}`} >
            <div className={`${state.isCollapsed ? styles.divUserCollapsed : styles.divUserExpanded}`}>
                <div className={styles.divButtonClose}>
                    <a href="/home" onClick={collapsedSideBar}>
                        <img src={state.isCollapsed ? buttonExpanded : buttonCollapsed} alt="fechar menu lateral" className={styles.buttonClose}/>
                    </a>
                </div>
                <div>
                    <img src={iconeUsuario} alt="icone do usuário" className={`${state.isCollapsed ?styles.iconUserCollapsed : styles.iconUserExpanded}`}/>
                </div>
                <div className={`${state.isCollapsed ? styles.divTextUserCollapsed : ''}`}>
                    <p>Elbert Jean</p>
                    <hr className={styles.lineUser}/>
                    <p>admin@admin.com</p>
                </div>
            </div>
            <div className={`${state.isCollapsed ? styles.divLineCollapsed : styles.divLineExpanded}`}>
                <hr className={styles.line}/>
            </div>
            <div>
                <a href="/home" className={`${state.isCollapsed ? styles.bodyCollapsed : styles.bodyExpanded}`}>
                    <div>
                        <img src={iconMap} alt="icone do mapa" className={`${state.isCollapsed ? styles.iconMapCollapsed : styles.iconMapExpanded}`}/>
                    </div>
                    <div className={`${state.isCollapsed ? styles.paragraphCollapsed : ''}`}>
                        <p className={styles.paragraphMap}>Visualizar áreas</p>
                    </div>
                </a>
            </div>
            <div className={`${state.isCollapsed ? styles.divButtonLoggoutCollapsed : styles.divButtonLoggoutExpanded}`}>
                <button className={`${state.isCollapsed ? styles.buttonLoggoutCollapsed : styles.buttonLoggoutExpanded}`} onClick={() => handleLogout()}>
                    <img src={logout} alt="botao" className={`${state.isCollapsed ? styles.iconMapButtonCollapsed : styles.iconMapButtonExpanded}`}/>
                    {state.isCollapsed ? "" : "Sair"}
                </button>
            </div>
        </div>
    )
}

export default Sidebar;