import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from "./util";

function ChangeMapView({ coords, zoom }) {
  const map = useMap();
  map.setView(coords);
  return null;
}

function Map({ countries, casesType, center, zoom }) {
  //console.log(casesType);
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
        <ChangeMapView coords={center} zoom={zoom} />
      </MapContainer>
    </div>
  );
}

export default Map;
