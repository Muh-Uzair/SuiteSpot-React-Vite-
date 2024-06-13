import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import PropTypes from "prop-types";
import { useContext } from "react";
import { HotelsPGContext } from "../../Pages/AllHotelsPG";
import { useSelector } from "react-redux";

export default function MapCMP() {
  const { mapPosition } = useContext(HotelsPGContext);
  const { cityName } = useSelector((state) => state.cityState);

  return (
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
          <span>{cityName}</span>
        </Popup>
      </Marker>
      <ChangeCenter position={mapPosition} />
    </MapContainer>
  );
}

ChangeCenter.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
