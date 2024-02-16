import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import styles from './HomePage.module.css';
import CardMap from "../../components/cardMap/CardMap.component";

import { SessionContext } from "../../routes/router.routes";

import { areasSJC as data } from "../map/data/data";

function HomePage(): JSX.Element {

    const { isCollapsed } = useContext(SessionContext)

    const navigate = useNavigate()

    return(
        <>
            <Layout title="Localização dos poligonos &#127757;">
                <div className={styles.container}>
                    <div className={`${styles.containerCards} ${ isCollapsed ? styles.containerCardsExpanded : styles.containerCards}`}>
                    {data.features.map(feature => (
                        <CardMap 
                            key={feature.properties.id} 
                            title={feature.properties.name} 
                            paragraph={feature.properties.description}
                            dataMap={feature}
                            centroId={feature.geometry}
                            button={()=> navigate('/map/' + feature.properties.id)}
                        />
                    ))}
                    </div>    
                </div>
            </Layout>
        </>
    )
}

export default HomePage;