import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer } from 'react-leaflet';

import Layout from "../../components/layout/Layout";
import AreasSJCLayer from "./layers/area_sjc";
import { areasSJC } from "./data/data";
import { SessionContext } from "../../routes/router.routes";
import CardInfo from "../../components/cardInfo/CardInfo";

import "leaflet/dist/leaflet.css";
import './Map.css';

function Map():JSX.Element {

    const { id } = useParams<{ id: string }>();
    const idAsNumber = id ? parseInt(id) : null;

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
                    {idAsNumber !== null && !isNaN(idAsNumber) && areasSJC.features[idAsNumber] && (
                        <AreasSJCLayer data={areasSJC.features[idAsNumber-1]} setGeoFilter={setGeoFilter} getGeoFilter={getGeoFilter}/>
                    )}
                </MapContainer>
                { cardCollapsed ? (
                    <div className="cardMapExpanded">
                        {idAsNumber !== null && !isNaN(idAsNumber) && areasSJC.features[idAsNumber] && (
                        <CardInfo 
                            title={areasSJC.features[idAsNumber-1].properties.name}
                            description={areasSJC.features[idAsNumber-1].properties.description}
                            centroId={areasSJC.features[idAsNumber-1].geometry}
                        />
                        )}
                    </div>
                ) : (
                    <div className="cardMapCollapsed">
                        {idAsNumber !== null && !isNaN(idAsNumber) && areasSJC.features[idAsNumber] && (
                            <CardInfo
                                title={areasSJC.features[idAsNumber-1].properties.name}
                                description={areasSJC.features[idAsNumber-1].properties.description}
                                centroId={areasSJC.features[idAsNumber-1].geometry}
                            />
                        )}
                    </div>
                )
                }
            </Layout>
        </>
    )
}

export default Map;