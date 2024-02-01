import { useContext } from "react";
import { GeoJSON, } from "react-leaflet";
import { FeatureCollection, Polygon } from "geojson";

import { SessionContext } from "../../../routes/router.routes";

function AreasSJCLayer({ data, setGeoFilter, getGeoFilter }: any):JSX.Element {

    const geoFilter = getGeoFilter();

    const { handleCardCollapsed } = useContext(SessionContext);

    return (
            <GeoJSON 
                key='geo-json-areas-SJC'
                data={data as unknown as FeatureCollection <Polygon>}
                eventHandlers={{
                    click: (e) => {
                        handleCardCollapsed(geoFilter);
                        setGeoFilter((prevState: any) => {
                            const same = prevState === e.propagatedFrom.feature;
                            return same ? null : e.propagatedFrom.feature;
                        })
                    }
                }}
                style={(feature) => {
                    return {
                        color: geoFilter === feature ? 'red' : 'blue',
                        weight: 0.5,
                        fillOpacity: geoFilter === feature? 0.4 : 0.25
                    }
                }}
            ></GeoJSON>
    );
}

export default AreasSJCLayer;
