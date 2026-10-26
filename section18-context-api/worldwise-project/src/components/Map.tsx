import type { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCitiesContext } from "../contexts/CitiesContextProvider";
import { useGeolocation } from "../hooks/useGeolocation";
import styles from "./Map.module.css";
import Button from "./Button";

type Props = {
  position: LatLngExpression;
}

function ChangeCenter({ position }: Props) {
  const map = useMap();
  map.setView(position, 6);
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
  const { cities } = useCitiesContext();
  const [searchParams] = useSearchParams();
  const [position, setPosition] = useState<LatLngExpression>([40, 10]);
  const { isLoading: isLoadingPosition, position: geolocationPosition, getPosition } = useGeolocation(null);
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));

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
      <MapContainer center={position} zoom={8} scrollWheelZoom={true} className={styles.map}>
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