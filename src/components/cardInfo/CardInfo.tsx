import { LuLoader2 } from "react-icons/lu";
import styles from './CardInfo.module.css';
function cardInfo():JSX.Element {
    return(
        <div className={styles.cardMap}>
            <div className={styles.cardInfo}>
                <p className={styles.info}>Carregando informações da <br/>área desejada!</p>
                <LuLoader2 className={styles.loader}/>
            </div>
        </div>
    )
}

export default cardInfo