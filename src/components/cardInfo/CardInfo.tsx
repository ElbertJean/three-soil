import { useParams } from 'react-router-dom';

import { MapContainer, TileLayer } from 'react-leaflet';
import { GeoJSON, } from "react-leaflet";
import { FeatureCollection, Polygon } from "geojson";

import styles from './CardInfo.module.css';

import { areasSJC } from '../../pages/map/data/data';
import centroid from '../../@utils/centroId.utils';
import { LatLngExpression } from 'leaflet';

interface CardInfoProps {
    title: string;
    description: string;
    centroId: any
}

function CardInfo(props: CardInfoProps):JSX.Element {

    const { title, description, centroId } = props
    const { id } = useParams();
    const idAsNumber = id ? parseInt(id) : null;

    return(
        <div className={styles.cardMap}>
            <div className={styles.cardInfo}>
                <MapContainer 
                    center={
                        [
                          centroid(centroId)[1],
                          centroid(centroId)[0],
                        ] as LatLngExpression
                    }
                    zoom={12} 
                    scrollWheelZoom={false} 
                    zoomControl={false} 
                    dragging={false} 
                    doubleClickZoom={false}
                    style={{width: '350px', height: '250px', borderRadius:'5px'}} // Não estava funcionando style com className
                >
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                    {idAsNumber !== null && !isNaN(idAsNumber) && areasSJC.features[idAsNumber-1] && (
                        <GeoJSON 
                            key='geo-json-areas-SJC'
                            data={areasSJC.features[idAsNumber-1] as unknown as FeatureCollection <Polygon>}
                        />
                    )}
                </MapContainer>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.info}>{description}</p>
            </div>
        </div>
    )
}

export default CardInfo