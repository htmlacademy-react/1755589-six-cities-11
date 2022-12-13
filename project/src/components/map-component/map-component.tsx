import { useRef, useEffect, useState } from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Offer } from '../../types/offer';

type MapComponentProps = {
  offers: Offer[];
  activeCard?: number;
  height: number;
  width?: number;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});

function MapComponent({ offers, activeCard, height, width}: MapComponentProps) {
  const [city, setCity] = useState(offers[0]);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    setCity(offers[0]);
  }, [offers]);

  useEffect(() => {

    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(
            activeCard !== undefined && offer.id === activeCard
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);

        map.flyTo({lat: offer.city.location.latitude, lng: offer.city.location.longitude});

      });
    }
  }, [map, activeCard, offers]);

  return(
    <div
      style={{height: `${height}px`, width: width ? `${width}px` : 'auto'}}
      ref={mapRef}
    >
    </div>
  );
}

export default MapComponent;
