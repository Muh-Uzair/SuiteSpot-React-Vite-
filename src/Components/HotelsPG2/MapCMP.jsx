import styles from "./MapCMP.module.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { HotelsPGContext } from "../../Pages/HotelsPG2";
import { useContext } from "react";
import PropTypes from "prop-types";

export default function MapCMP() {
  const { mapPosition } = useContext(HotelsPGContext);
  return (
    <div className={styles.divMainBox}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        zoomControl={false} // Setting zoomControl to false here
        style={{ height: "100%", zIndex: "500", overflow: "hidden" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            <span>City</span>
          </Popup>
        </Marker>
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

ChangeCenter.propTypes = {
  position: PropTypes.array,
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
