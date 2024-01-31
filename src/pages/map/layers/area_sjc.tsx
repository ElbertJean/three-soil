import { GeoJSON, } from "react-leaflet";
import { FeatureCollection, Polygon } from "geojson";
// import { areasSJC } from "../data/data";

function AreasSJCLayer({ data}: any):JSX.Element {

    return (
            <GeoJSON 
                key='geo-json-areas-SJC'
                data={data as unknown as FeatureCollection <Polygon>}
                style={{color: 'blue'}}
            ></GeoJSON>
    );
}

export default AreasSJCLayer;
