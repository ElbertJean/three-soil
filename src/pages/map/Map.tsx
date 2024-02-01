import { useContext, useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';

import Layout from "../../components/layout/Layout";
import AreasSJCLayer from "./layers/area_sjc";
import { areasSJC } from "./data/data";
import { SessionContext } from "../../routes/router.routes";
import CardInfo from "../../components/cardInfo/CardInfo";

import "leaflet/dist/leaflet.css";
import './Map.css';

function Map():JSX.Element {

    const center:[number, number] = [-23.148018027367087, -45.829357780257624]
    const { cardCollapsed } = useContext(SessionContext)

    const [geoFilter, setGeoFilter] = useState(null);
    const getGeoFilter = () => geoFilter   

    return (
        <>
            <Layout>
                <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                    <AreasSJCLayer data={areasSJC.features[1]} setGeoFilter={setGeoFilter} getGeoFilter={getGeoFilter}/>
                </MapContainer>
                { cardCollapsed ? (
                   <div className="cardMapExpanded">
                       <CardInfo />
                   </div>
                ) : (
                    <div className="cardMapCollapsed">
                        <CardInfo />
                    </div>
                )
                }
            </Layout>
        </>
    )
}

export default Map;