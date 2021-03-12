import React, { useEffect, useRef, useState } from 'react';
import './square-map.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj'
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

function SquareMap(props) {
    const mapRef = useRef();
    const [map, setMap] = useState();
    const [featuresLayer, setFeatures] = useState();    

    useEffect(() => {
        const initialFeaturesLayer = new VectorLayer({source: new VectorSource()});

        let options = {
            view: new View({
                zoom: props.zoom,
                center: fromLonLat(props.center)
            }),
            layers: [
                new TileLayer({source: new OSM()}),
                initialFeaturesLayer,
            ],
            target: mapRef.current,
        }

        const mapObj =  new Map(options);
        setMap(mapObj);
        setFeatures(initialFeaturesLayer);
    }, []);

    useEffect(() => {
        if (props.features.length){
            featuresLayer.setSource(
                new VectorSource({
                    features: props.features
                })
            )    
        }
    }, [props.features])

    return (
        <div ref={mapRef} className='square-map'>
        </div>
    );
}

export default SquareMap;