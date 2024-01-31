import Layout from "../../components/layout/Layout";
import styles from './HomePage.module.css';
import area1 from '../../assets/area1.svg';
import area2 from '../../assets/area2.svg';

function HomePage(): JSX.Element {

    return(
        <>
            <Layout>
                <div className={styles.container}>
                    <div className={styles.containerCards}>
                        <div className={styles.card}>
                            <img src={area1} alt='área 1' className={styles.imageMap}/>
                            <div className={styles.descriptionCard}>
                                <h3 className={styles.titleCard}>Fazenda Recanto dos Pássaros</h3>
                                <p className={styles.paragraphCard}>
                                    Fazenda localizada na região oeste de São José dos Campos, sendo umas das 
                                    principais áreas de plantio de milho da região.
                                </p>
                            </div>
                            <div className={styles.divButton}>
                                <button className={styles.buttonActive} onClick={()=>alert('auu')}>Acessar</button>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={area2} alt='área 2' className={styles.imageMap}/>
                            <div className={styles.descriptionCard}>
                                <h3 className={styles.titleCard}>Floresta preservada Campo da Mantiqueira</h3>
                                <p className={styles.paragraphCard}>
                                Reserva localizada na região oeste de São José dos Campos, onde possui diversos 
                                tipos de árvores preservadas.
                                </p>
                            </div>
                            <div className={styles.divButton}>
                                <button className={styles.buttonActive} onClick={()=>alert('auu')}>Acessar</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </Layout>
        </>
    )
}

export default HomePage;