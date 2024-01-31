import Layout from "../../components/layout/Layout";
import { MapContainer, TileLayer } from 'react-leaflet';
import AreasSJCLayer from "./layers/area_sjc";

import { areasSJC } from "./data/data";

import "leaflet/dist/leaflet.css";
import './Map.css';

function Map():JSX.Element {

    const center:[number, number] = [-23.148018027367087, -45.829357780257624]

    return (
        <>
            <Layout>
                <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                    <AreasSJCLayer data={areasSJC.features[1]}/>
                </MapContainer>
            </Layout>
        </>
    )
}

export default Map;