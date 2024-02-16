import styles from "./CardMap.module.css";

import { MapContainer, TileLayer } from 'react-leaflet';
import { GeoJSON, } from "react-leaflet";
import { FeatureCollection, Polygon } from "geojson";

import centroid from "../../@utils/centroId.utils";
import { LatLngExpression } from "leaflet";

interface CardMapProps {
  title: string;
  paragraph: string;
  dataMap: object;
  centroId: any;
  button?: () => void;
}

function CardMap(props: CardMapProps): JSX.Element {
  
  const { title, paragraph, dataMap, centroId, button } = props;

  return (
    <div className={styles.card}>
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
          style={{width: '300px', height: '250px', borderRadius: 0, borderTopLeftRadius:'10px', borderTopRightRadius:'10px', marginTop: 0}} // Não estava funcionando style com className
      >
          <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          <GeoJSON 
              key='geo-json-areas-SJC'
              data={dataMap as unknown as FeatureCollection <Polygon>}
          />
      </MapContainer>
      <div className={styles.descriptionCard}>
          <h3 className={styles.titleCard}>{title}</h3>
          <p className={styles.paragraphCard}>{paragraph}</p>
      </div>
      <div className={styles.divButton}>
          <button className={styles.buttonActive} onClick={button}>Acessar</button>
      </div>
    </div>
  )
}

export default CardMap;