import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from "leaflet";

import Layout from "../../components/layout/Layout";
import AreasSJCLayer from "./layers/area_sjc";
import { areasSJC } from "./data/data";
import { SessionContext } from "../../routes/router.routes";
import CardInfo from "../../components/cardInfo/CardInfo";

import centroid from "../../@utils/centroId.utils";

import "leaflet/dist/leaflet.css";
import './Map.css';

function Map():JSX.Element {

    const { id } = useParams<{ id: string }>();
    const idAsNumber = id ? parseInt(id) : null;

    const { cardCollapsed } = useContext(SessionContext)

    const [geoFilter, setGeoFilter] = useState(null);
    const getGeoFilter = () => geoFilter   

    return (
        <>
            <Layout>
                <MapContainer 
                    center={
                        idAsNumber !== null && !isNaN(idAsNumber) && areasSJC.features[idAsNumber -1]
                        ? [
                            centroid({type: 'Polygon', coordinates:areasSJC.features[idAsNumber-1].geometry.coordinates})[1],
                            centroid({type: 'Polygon', coordinates:areasSJC.features[idAsNumber-1].geometry.coordinates})[0],
                          ] as LatLngExpression
                        : [0, 0]
                }
                    zoom={13}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                    {idAsNumber !== null && !isNaN(idAsNumber) && areasSJC.features[idAsNumber -1] && (
                        <AreasSJCLayer data={areasSJC.features[idAsNumber-1]} setGeoFilter={setGeoFilter} getGeoFilter={getGeoFilter}/>
                    )}
                </MapContainer>
                { cardCollapsed ? (
                    <div className="cardMapExpanded">
                        {idAsNumber !== null && !isNaN(idAsNumber) && areasSJC.features[idAsNumber -1] && (
                        <CardInfo 
                            title={areasSJC.features[idAsNumber-1].properties.name}
                            description={areasSJC.features[idAsNumber-1].properties.description}
                            centroId={areasSJC.features[idAsNumber-1].geometry}
                        />
                        )}
                    </div>
                ) : (
                    <div className="cardMapCollapsed">
                        {idAsNumber !== null && !isNaN(idAsNumber) && areasSJC.features[idAsNumber -1] && (
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