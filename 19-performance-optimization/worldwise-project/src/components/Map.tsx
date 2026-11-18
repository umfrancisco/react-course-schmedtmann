import type { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useCitiesContext } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Button from "./Button";
import styles from "./Map.module.css";

type Props = {
  position: LatLngExpression;
}

function ChangeCenter({ position }: Props) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: e => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      navigate(`form?lat=${lat}&lng=${lng}`);
    },
  });
  return null;
}

function Map() {
  const [position, setPosition] = useState<LatLngExpression>([40, 10]);
  const { cities } = useCitiesContext();
  const { isLoading: isLoadingPosition, position: geolocationPosition, getPosition } = useGeolocation(null);
  const { lat, lng } = useUrlPosition();

  useEffect(() => {
    if (lat && lng) {
      setPosition([lat, lng]);
    }
  }, [lat, lng]);

  useEffect(() => {
    if (geolocationPosition) {
      setPosition([geolocationPosition.lat, geolocationPosition.lng]);
    }
  }, [geolocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}
      <MapContainer center={position} zoom={6} scrollWheelZoom={true} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(city => (
          <Marker position={city.position} key={city.id}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={position} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

export default Map;