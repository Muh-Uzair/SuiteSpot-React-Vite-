import styles from "./MapCMP.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapCMP() {
  return (
    <div className={styles.divMainBox}>
      <MapContainer
        center={[40, 0]}
        zoom={6}
        scrollWheelZoom={true}
        zoomControl={false} // Setting zoomControl to false here
        style={{ height: "100%", zIndex: "500", overflow: "hidden" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40, 0]}>
          <Popup>
            <span>City</span>
          </Popup>
        </Marker>
        {/* <ChangeCenter position={mapPosition} /> */}
      </MapContainer>
    </div>
  );
}

// ChangeCenter.propTypes = {
//   position: PropTypes.arrayOf(PropTypes.number).isRequired,
// };

// function ChangeCenter({ position }) {
//   const map = useMap();
//   map.setView(position);
//   return null;
// }
